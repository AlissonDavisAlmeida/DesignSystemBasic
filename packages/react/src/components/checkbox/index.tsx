import { Check } from "phosphor-react"
import { ComponentProps } from "react"
import { CheckBoxContainer, CheckBoxIndicator } from "./styled"

export interface CheckBoxProps extends ComponentProps<typeof CheckBoxContainer> { }


export const CheckBox = (props: CheckBoxProps) => {
    return (
        <CheckBoxContainer {...props} aria-label="Accept terms">
            <CheckBoxIndicator asChild>
                <Check weight="bold" />
            </CheckBoxIndicator>
        </CheckBoxContainer>
    )
}
