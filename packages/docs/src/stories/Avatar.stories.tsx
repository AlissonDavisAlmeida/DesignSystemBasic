import { Avatar, AvatarProps } from "@smart-dev_ui/react"
import { StoryObj, Meta } from "@storybook/react"


export default {
    title: "Data display/Avatar",
    component: Avatar,
    args: {
        src: `https://github.com/diego3g.png`,
    }
} as Meta<AvatarProps>



export const Primary: StoryObj<AvatarProps> = {
    args: {
    }
}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: `undefined`
    }
}
