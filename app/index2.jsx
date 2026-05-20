import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";

export default function TestScreen() {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');

    function handlePress() {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    }

    return (
        <Box className="flex-1 p-6 bg-background-0">
            <VStack space="lg">
                <Heading>Gluestack Test</Heading>

                <Text>Basic text component</Text>

                <Badge>
                    <BadgeText>New</BadgeText>
                </Badge>

                <Input>
                    <InputField
                        placeholder="Type something..."
                        value={text}
                        onChangeText={setText}
                    />
                </Input>

                <Text>You typed: {text}</Text>

                <HStack space="md">
                    <Button onPress={handlePress}>
                        <ButtonText>Primary</ButtonText>
                    </Button>
                    <Button action="secondary" onPress={handlePress}>
                        <ButtonText>Secondary</ButtonText>
                    </Button>
                    <Button action="negative" onPress={handlePress}>
                        <ButtonText>Delete</ButtonText>
                    </Button>
                </HStack>

                {loading && <Spinner />}
            </VStack>
        </Box>
    )
}