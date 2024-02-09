import React, { useState } from "react";
import { Container } from "./styles";
import { NotePencil, Star, Trash } from "phosphor-react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { HelpModal } from "../Modal";

interface ICard {
  data: IData;
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

export function Card({ data }: ICard) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  async function handleDeleteTask() {
    try {
      const response = await api.delete(`/${data.id}`);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      toast.error("Erro ao excluir Cliente");
    }
  }

  async function handleCompleteTask() {
    const response = await api.get(`/${data.id}`);

    const currentDate = new Date();

    const newData = {
      ...response.data,
      premium: !data.premium,
      date: currentDate.toISOString().substring(0, 10),
    };

    try {
      const response = await api.patch(`/${data.id}`, newData);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      toast.error("Erro ao editar Cliente");
    }
  }

  return (
    <Container>
      <div className="content">
        <h3>{data.name}</h3>
        <p>CPF: {data.cpf}</p>
        <p>Email: {data.email}</p>
        <p>Telefone: {data.tel}</p>
        <p>Criado em: {data.date}</p>
      </div>

      <div style={{ display: "flex" }}>
        {data.premium ? (
          <Star className="icon checked" onClick={() => handleCompleteTask()} />
        ) : (
          <Star className="icon check" onClick={() => handleCompleteTask()} />
        )}

        <NotePencil
          className="icon edit"
          size={32}
          onClick={() => setIsOpenModal(true)}
        />

        <Trash className="icon trash" onClick={() => handleDeleteTask()} />
      </div>

      {isOpenModal && <HelpModal data={data} setIsOpen={setIsOpenModal} />}
    </Container>
  );
}
