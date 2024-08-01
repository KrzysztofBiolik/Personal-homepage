import { Error } from "./Error";
import { Loading } from "./Loading";
import { Repositories } from "./Success";

export const StatusContent = ({ status, repositories }) => {
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />

        case "success":
            return <Repositories repositories={repositories} />

        case "error":
            return <Error />

        default:
            throw new Error(`incorrect status: ${status}`);
    }
};