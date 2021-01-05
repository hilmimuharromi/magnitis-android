import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';


const Login = () => {
    return <Container>
        <Header />
        <Content>
            <Form>
                <Item stackedLabel>
                    <Label>Username</Label>
                    <Input onChangeText={(e) => console.log(e)} />
                </Item>
                <Item stackedLabel last>
                    <Label>Password</Label>
                    <Input onChangeText={(e) => console.log(e)} />
                </Item>
                <Button>
                    <Text>Login</Text>
                </Button>
            </Form>
        </Content>
    </Container>
}

export default Login