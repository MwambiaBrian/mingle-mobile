//imports
import React, {useState} from 'react'
import {View,Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik} from 'formik'
//icons
import {Octicons, Ionicons, Fontisto} from "@expo/vector-icons";
//colors

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle, 
    SubTitle,
    StyledFormArea, 
    LeftIcon, 
    StyledInputLabel,
    StyledTextInput,
    RightIcon, 
    Colors,
    StyledButton,
    ButtonText,
    Line, 
    MsgBox, 
    ExtraText, 
    TextLink,
    TextLinkContent,
    ExtraView
} from '../components/styles.js'

const {brand, darkLight, primary}=Colors;

const Login = () => {
const [hidePassword, setHidePassword]= useState(true)

return (
    <StyledContainer>
        <StatusBar style='dark' />
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/icon.png')} />
            <PageTitle>SmartMarket</PageTitle>
            <SubTitle>Account Login</SubTitle>
            <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >{({handleChange, handleBlur, handleSubmit,values}) => (<StyledFormArea>
                <MyTextInput
                label="Email"
                icon="mail"
                placeholder="abduh@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                />
                   <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
               secureTextEntry={hidePassword}
               isPassword={true}
               hidePassword={hidePassword}
               setHidePassword={setHidePassword}
                />
                <MsgBox>. . .</MsgBox>
                <StyledButton>
                    <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true}>
                    <Fontisto name="google" size={25} color={primary} />
                    <ButtonText google={true}>Sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                    <ExtraText>Don't have an account?</ExtraText>
                    <TextLink>
                        <TextLinkContent>Signup</TextLinkContent>
                    </TextLink>
                </ExtraView>
            </StyledFormArea>)


            }

            </Formik>


        </InnerContainer>
    </StyledContainer>
);
};

const MyTextInput = ({label, icon,isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=> setHidePassword(!hidePassword )}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye' } size={30} color={darkLight} />

                </RightIcon>
            ) }

        </View>
    )
}
export default Login