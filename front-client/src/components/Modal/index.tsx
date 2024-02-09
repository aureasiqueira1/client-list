import React, { useState } from "react";

import { Container } from "./styles";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Input } from "../Input";
import { Button } from "../Button";

interface IHelpModal {
  data: IData;
  setIsOpen: any;
}

interface IData {
  id: string;
  cpf: string;
  email: string;
  tel: string;
  name: string;
  premium: Boolean;
  date: string;
}

export function HelpModal({ data, setIsOpen }: IHelpModal) {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [tel, setTel] = useState(data.tel);
  const [cpf, setCpf] = useState(data.cpf);
  const [isPremium, setIsPremium] = useState(data.premium);

  async function handleUpdateTask(id: string) {
    const currentDate = new Date();

    const newData = {
      name: name,
      email: email,
      tel: tel,
      cpf: cpf,
      premium: isPremium,
      date: currentDate.toISOString().substring(0, 10),
    };

    try {
      const response = await api.patch(`/${id}`, newData);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      toast.error("Erro ao atualizar Cliente");
    }
  }

  function handleKeyPress(event: React.KeyboardEvent) {
    if (event.key === "Enter" && name && email && tel && cpf) {
      handleUpdateTask(data.id);
    }
  }

  return (
    <Container>
      <div
        className="darkBG"
        data-testid="dark-bg"
        onClick={() => setIsOpen(false)}
      />
      <div className="centered">
        <div className="modal" data-testid="help-modal">
          <h1 className="title">Atualizar Cliente</h1>
          <div className="modalContent">
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

            <label className="form-control" id="premium">
              <input
                name="checkbox"
                id="premium"
                type="checkbox"
                checked={isPremium ? true : false}
                onChange={() => setIsPremium(!isPremium)}
              />
              Premium
            </label>

            <Button
              name="Atualizar"
              disabled={!name || !cpf || !email || !tel}
              onClick={() => handleUpdateTask(data.id)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
