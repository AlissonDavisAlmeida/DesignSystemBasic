import { Box, CheckBox, Text, CheckBoxProps } from "@smart-dev_ui/react"
import { StoryObj, Meta } from "@storybook/react"


export default {
    title: "Form/Checkbox",
    component: CheckBox,
    args: {},
    decorators: [
        (Story) => (
            <Box as={"label"} css={{
                display: "flex",
                flexDirection: "row",
                gap: "$2",
            }}>
                <Text
                    size={"sm"}
                >
                    Observations and comments
                </Text>
                <Story />
            </Box>
        )
    ]
} as Meta<CheckBoxProps>



export const Primary: StoryObj<CheckBoxProps> = {

}
