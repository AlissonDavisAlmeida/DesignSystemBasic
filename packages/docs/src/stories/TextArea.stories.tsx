import { Box, Text, TextArea, TextAreaProps } from "@smart-dev__ui/react"
import { StoryObj, Meta } from "@storybook/react"


export default {
    title: "Form/Text Area",
    component: TextArea,
    args:{},
    decorators:[
        (Story) => (
            <Box as={"label"} css={{
                display: "flex",
                flexDirection: "column",
                gap: "$2",
            }}>
                <TextArea
                />
            </Box>
        )
    ]
} as Meta<TextAreaProps>



export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: "Enter your name",
    }
}
