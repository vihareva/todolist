import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "./Todolist";
import AppWithRedux from "./AppWithRedux";
import {store} from "./state/store";
import {Provider} from "react-redux";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";

export default {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    decorators:[ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;


const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux/>;

export const AppWithReduxStories = Template.bind({});
