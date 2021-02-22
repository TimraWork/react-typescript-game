import ItemListView from "../item-list-view";
import withData from "../hoc/with-data";
import withChildFunction from "../hoc/with-child-function";
import withSwapiService from "../hoc/with-swapi-context";

const renderGistTitle = (item) => `${item.title}`;

const renderPostExcerpt = (item) =>
    `<img src="${item.img}" style="max-height: 100px;" alt=""/><div>${item.title}</div><div class="date">(${item.date})</div>`;

const renderCatExcerpt = (item) =>
    `<img src="${item.img}" style="max-height: 100px;" alt=""/><div>${item.title}</div>`;

const renderWorkExcerpt = (item) =>
    `<img src="${item.img}" style="max-height: 100px;" alt=""/><div>
    <a href="${item.url}" target="_blank">${item.title}</a>
    <div>Категория - ${item.category}</div>
    <div>Теги - ${item.tags.map((el) => el)}</div>
    </div>`;

const mapGistsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getGists,
    };
};
const mapWorksMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getWorks,
    };
};
const mapPostsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPosts,
    };
};
const mapCatsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getCats,
    };
};

const GistList = withSwapiService(
    withData(withChildFunction(ItemListView, renderGistTitle)),
    mapGistsMethodsToProps
);
const WorkList = withSwapiService(
    withData(withChildFunction(ItemListView, renderWorkExcerpt)),
    mapWorksMethodsToProps
);
const PostList = withSwapiService(
    withData(withChildFunction(ItemListView, renderPostExcerpt)),
    mapPostsMethodsToProps
);
const CatList = withSwapiService(
    withData(withChildFunction(ItemListView, renderCatExcerpt)),
    mapCatsMethodsToProps
);

export { GistList, PostList, CatList, WorkList };
