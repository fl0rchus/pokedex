import { NextPage } from "next";
import ErrorMessage from "@components/ErrorMessage";

const NotFoundPage: NextPage = () => {
  return <ErrorMessage message="404: página no encontrada" />;
};

export default NotFoundPage;
