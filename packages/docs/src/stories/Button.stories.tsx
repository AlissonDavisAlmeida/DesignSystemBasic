import { Button, ButtonProps } from "@smart-dev_ui/react"
import { StoryObj, Meta } from "@storybook/react"


export default {
    title: "Form/Button",
    component: Button,
    args: {
        children: "Button"
    },
    argTypes: {
        variant: {
            options: ["primary", "secondary", "tertiary"],
            control: { type: "inline-radio" }
        },
        onClick: { action: "clicked" }
    }
} as Meta<ButtonProps>



export const Primary: StoryObj<ButtonProps> = {
    args: {
        variant: "primary",
    }
}


