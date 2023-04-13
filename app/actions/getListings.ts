import prisma from "@/app/libs/prismadb";

// export interface IListingsParams {
//     userId?: string;
//     guestCount?: number;
//     roomCount?: number;
//     bathroomCount?: number;
//     startDate?: string;
//     endDate?: string;
//     locationValue?: string;
//     category?: string;
//   }
  

export default async function getListings()
{
    try {
        
        // const {
        //     userId,
        //     roomCount, 
        //     guestCount, 
        //     bathroomCount, 
        //     locationValue,
        //     startDate,
        //     endDate,
        //     category,
        //   } = params;


        let query: any = {};

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
              createdAt: 'desc'
            }
          });
        
          return listings;

    } catch (error:any) {
        throw new Error(error);
    }
}