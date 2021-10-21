import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "./Todolist";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
    title: 'TODOLISTS/Task',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    //общие пропсы для всех историй(одинаковое поведение у таски несделанной и сделанной)
    args:{
        removeTask: action('removeTask'),
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle')
    }
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//образец таски, принимает только пропсы типа TaskPropsType
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;
//на основе образца создаем истории
export const TaskIsDoneStories = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
//описываем эти пропсы
TaskIsDoneStories.args = {
 task:{
     id:'1',
     isDone: true,
     title: 'JS'
 },
    todolistId: 'todo1',
    // removeTask: action('removeTask'),
    //     changeTaskStatus: action('changeTaskStatus'),
    // changeTaskTitle: action('changeTaskTitle')
};

export const TaskIsNotDoneStories = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsNotDoneStories.args = {
    task:{
        id:'2',
        isDone: false,
        title: 'css'
    },
    todolistId: 'todo2',
    // removeTask: action('removeTask'),
    // changeTaskStatus: action('changeTaskStatus'),
    // changeTaskTitle: action('changeTaskTitle')
};