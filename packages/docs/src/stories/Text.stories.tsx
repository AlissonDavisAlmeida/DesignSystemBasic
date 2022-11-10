import { Text, TextProps } from "@smart-dev_ui/react"
import { StoryObj, Meta } from "@storybook/react"


export default {
    title: "Typograph/Text",
    component: Text,
} as Meta<TextProps>



export const Primary: StoryObj<TextProps> = {
    args: {
        children: `Test component Text`
    }
}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: `Test component Text`,
        as: "strong"
    }
}

