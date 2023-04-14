import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById'
import ListingClient from './listingClient';
import EmptyState from '@/app/components/emptyState';

interface IParams {
    listingId?: string;
}

const ListingsPage = async ( {params}: {params: IParams} ) => {

    const listing = await getListingById(params);
    const currentUser = getCurrentUser();

    if (!listing) return <EmptyState />

    return (
        <ListingClient 
            listing={listing}
            currentUser={currentUser}
        />
    )
}

export default ListingsPage