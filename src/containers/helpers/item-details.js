import ItemDetailsView from "../item-details-view";
import withData from "../hoc/with-data";
import withSwapiContext from "../hoc/with-swapi-context";

const mapAboutMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPage,
    };
};

const mapPostMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPost,
    };
};

const mapGistMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getGist,
    };
};

const AboutDetails = withSwapiContext(
    withData(ItemDetailsView),
    mapAboutMethodsToProps
);

const PostDetails = withSwapiContext(
    withData(ItemDetailsView),
    mapPostMethodsToProps
);

const GistDetails = withSwapiContext(
    withData(ItemDetailsView),
    mapGistMethodsToProps
);

export { GistDetails, PostDetails, AboutDetails };
