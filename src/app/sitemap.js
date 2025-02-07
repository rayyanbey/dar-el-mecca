export async function generateStaticParams() {
    const endpoints = [
        { type: 'U', path: '/pages/apis/events/U-packages/all' },
        { type: 'T', path: '/pages/apis/events/T-packages/all' },
        { type: 'H', path: '/pages/apis/events/H-packages/all' }
    ];

    const dataPromises = endpoints.map(async (endpoint) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}${endpoint.path}`, {
                next: { revalidate: 60 }, // Ensures periodic data fetching in ISR
            });
            if (!res.ok) throw new Error("Failed to fetch data");
            
            const resData = await res.json();
            return { type: endpoint.type, data: resData.data || {} };
        } catch (error) {
            console.error(`Error fetching data from ${endpoint.path}:`, error);
            return { type: endpoint.type, data: {} };
        }
    });

    const allData = await Promise.all(dataPromises);

    const staticParams = allData.flatMap(({ type, data }) =>
        Object.entries(data).flatMap(([month, packages]) =>
            packages.map(({ id }) => ({
                type,
                id,
            }))
        )
    );

    return staticParams;
}

export default async function generateSitemap() {
    const params = await generateStaticParams();

    const sitemap = [
        { url: `${process.env.NEXT_PUBLIC_HOST_NAME}/` }, // Homepage
        ...params.map(({ type, id }) => ({
            url: `${process.env.NEXT_PUBLIC_HOST_NAME}/${type}-packages/${id}`,
        })),
    ];

    return sitemap;
}
