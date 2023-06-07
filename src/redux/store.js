import { devToolsEnhancer } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer";

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
