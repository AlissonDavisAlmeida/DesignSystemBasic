import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styled'

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string
}

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input  {...props} />
        </TextInputContainer>
    )
}
