import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Divider, Form, Modal, Row, message, Spin } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { EventActionCreators } from "../store/reducers/event/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Event: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInit, setIsInit] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { fetchGuests, fetchEvents, createEvent } =
    useActions(EventActionCreators);
  const { user } = useTypedSelector((state) => state.auth);
  const { guests, error, events } = useTypedSelector((state) => state.event);

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    await createEvent({
      author: user.username,
      description: values.description,
      date: values.date.format("DD.MM.YYYY"),
      guests: values.guests,
    });
    form.resetFields();
    setIsModalVisible(false);
    await fetchEvents(user.username);
    setIsLoading(false);
    message.success("Событие добавлено!");
  };

  useEffect(() => {
    if (error) message.error(error);
  }, [error]);

  useEffect(() => {
    const fetch = async () => {
      await fetchGuests();
      await fetchEvents(user.username);
    };
    setIsLoading(true);
    fetch().then(() => {
      setIsLoading(false);
      setIsInit(true);
    });
  }, [fetchGuests, fetchEvents, user.username]);

  return (
    <div style={{ padding: "0 0 200px" }}>
      <Spin spinning={isLoading}>
        <EventCalendar events={isInit ? events : []} />
      </Spin>
      <Divider />
      <Row justify="center">
        <Button onClick={() => setIsModalVisible(true)}>
          Добавить событие
        </Button>
      </Row>
      <Modal
        title="Дабавление события"
        visible={isModalVisible}
        onOk={form.submit}
        onCancel={() => setIsModalVisible(false)}
        okButtonProps={{ loading: isLoading }}
      >
        <EventForm guests={guests} form={form} onSubmit={onSubmit} />
      </Modal>
    </div>
  );
};

export default Event;
