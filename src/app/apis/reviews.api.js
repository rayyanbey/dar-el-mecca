export const getReviewsAPI= async ()=>{
   try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/pages/apis/reviews/getReviews`);
     const resData = await res.json();
     return resData.data;
   } catch (error) {
        return error.response.data;
   }
} 