
export async function generateStaticParams() {
    const endpoints = [
        { type: 'U', path: '/pages/apis/events/U-packages/all' },
        { type: 'T', path: '/pages/apis/events/T-packages/all' },
        { type: 'H', path: '/pages/apis/events/H-packages/all' }
    ];

    const dataPromises = endpoints.map(async (endpoint) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}${endpoint.path}`);
            const resData = await res.json();
            return { type: endpoint.type, data: resData.data || {} }; // Ensure data exists
        } catch (error) {
            console.error(`Error fetching data from ${endpoint.path}:`, error);
            return { type: endpoint.type, data: {} }; // Return empty object on error
        }
    });

    const allData = await Promise.all(dataPromises);

    const staticParams = [];
    for (const { type, data } of allData) {
        for (const month of Object.keys(data)) {
            const packages = data[month];
            for (const subItem of packages) {
                staticParams.push({
                    type,
                    id: subItem.id,
                    updatedAt: subItem.updatedAt
                    
                });
            }
        }
    }

    return staticParams;
}

export default async function generateSitemap() {
    const params = await generateStaticParams();

    const packageEntries = params.map(({ type, id, updatedAt }) => ({
        url: `${process.env.NEXT_PUBLIC_HOST_NAME}/${type}-packages/${id}`,
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_HOST_NAME}/`,
        },
        ...packageEntries,
    ];
}
