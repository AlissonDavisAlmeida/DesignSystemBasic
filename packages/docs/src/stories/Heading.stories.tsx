import { HeadingProps, Heading } from "@smart-dev_ui/react"
import { StoryObj, Meta } from "@storybook/react"


export default {
    title: "Typograph/Heading",
    component: Heading,
    args: {
        children: `Test component Heading`
    }
} as Meta<HeadingProps>



export const Primary: StoryObj<HeadingProps> = {
    args: {
    },
   
}
export const Secondary: StoryObj<HeadingProps> = {
    args: {
    },
    parameters: {
        docs: {
            description: {
                story: `# Heading component`
            }
        }
    }
}



