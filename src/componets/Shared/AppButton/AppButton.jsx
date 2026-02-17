import { Button } from '@heroui/react'
import React from 'react'

export default function AppButton({ children, isDisabled, isLoading, ...props }) {
    return (
        <Button

            {...props}
            type="submit"
            color="primary"
            isDisabled={isDisabled}
            isLoading={isLoading}
        >
            {children}
        </Button>
    )
}
