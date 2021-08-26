/* eslint-disable react/no-children-prop */
import { useFormik } from "formik";
import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";

import * as yup from "yup";

import Logo from "./../components/Logo";

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("Campo de E-mail obrigatorio."),
  password: yup.string().min(6).max(10).required("Senha obrigatorio."),
  username: yup.string().required("Username obrigatorio."),
});

export default function Home() {
  const formik = useFormik({
    onSubmit: () => {},
    validationSchema,
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  return (
    <Container p={4} centerContent>
      <Logo />

      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && (
            <FormHelperText textColor="#e74c3c">
              {formik.errors.email}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && (
            <FormHelperText textColor="#e74c3c">
              {formik.errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl id="username" p={4} isRequired>
          <InputGroup size="lg">
            <InputLeftAddon children="clocker.jeffersonbrandao.com.br/" />
            <Input
              type="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </InputGroup>
          {formik.touched.username && (
            <FormHelperText textColor="#e74c3c">
              {formik.errors.username}
            </FormHelperText>
          )}
        </FormControl>

        <Box p={4}>
          <Button width="100%" onClick={formik.handleSubmit}>
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
