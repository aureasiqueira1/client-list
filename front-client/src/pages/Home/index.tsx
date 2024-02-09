import React, { useState, useEffect } from "react";

import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, InputsContainer, Wrapper, Tabs, ToDoList } from "./styles";
import { Card } from "../../components/Card";
import { toast } from "react-toastify";

interface IResponse {
  id: string;
  cpf: string;
  email: string;
  tel: string;
  name: string;
  premium: Boolean;
  date: string;
}

export function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cpf, setCpf] = useState("");
  const [isPremium, setIsPremium] = useState(false);

  const [isPremiumScreen, setIsPremiumScreen] = useState(false);

  const [vip, setVip] = useState<IResponse[]>([]);
  const [premium, setPremium] = useState<IResponse[]>([]);

  async function getClients() {
    const response = await api.get("");

    let vip: IResponse[] = [];
    let premium: IResponse[] = [];

    response?.data?.map((value: IResponse) =>
      value.premium === false ? vip.push(value) : premium.push(value)
    );

    setVip(vip);
    setPremium(premium);
  }

  async function handleCreateClient() {
    const currentDate = new Date();

    const data = {
      name: name,
      email: email,
      tel: tel,
      cpf: cpf,
      premium: isPremium,
      date: currentDate.toISOString().substring(0, 10),
    };

    try {
      const response = await api.post("", data);
      if (response.status === 201) {
        window.location.reload();
      }
    } catch (error) {
      toast.error("Erro ao criar Cliente");
    }
  }

  function handleKeyPress(event: React.KeyboardEvent) {
    if (event.key === "Enter" && name && email && tel && cpf) {
      handleCreateClient();
    }
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Container>
      <h1>Lista de Clientes</h1>

      <Wrapper>
        <InputsContainer>
          <Input
            name="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(event) => handleKeyPress(event)}
          />

          <Input
            name="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(event) => handleKeyPress(event)}
          />

          <label className="form-control" id="premium">
            <input
              name="checkbox"
              id="premium"
              type="checkbox"
              checked={isPremium}
              onChange={() => setIsPremium(!isPremium)}
            />
            Premium
          </label>
        </InputsContainer>

        <InputsContainer>
          <Input
            name="Cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            onKeyPress={(event) => handleKeyPress(event)}
          />

          <Input
            name="Telefone"
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            onKeyPress={(event) => handleKeyPress(event)}
          />

          <Button
            name="Criar"
            disabled={!name || !cpf || !email || !tel}
            onClick={() => handleCreateClient()}
          />
        </InputsContainer>

        <hr />

        <Tabs>
          <Button
            name="VIP"
            active={!isPremiumScreen}
            onClick={() => setIsPremiumScreen(false)}
          />
          <Button
            name="PREMIUM"
            active={isPremiumScreen}
            onClick={() => setIsPremiumScreen(true)}
          />
        </Tabs>

        <ToDoList>
          {!isPremiumScreen
            ? vip?.map((item, index) => <Card key={index} data={item} />)
            : premium?.map((item, index) => <Card key={index} data={item} />)}
        </ToDoList>
      </Wrapper>
    </Container>
  );
}
