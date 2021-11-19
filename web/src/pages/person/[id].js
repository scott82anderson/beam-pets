import { useRouter } from "next/router";
import PersonContainer from "@/components/PersonContainer";

const PersonPage = () => {
  const router = useRouter();
  const id = router?.query?.id;

  return <PersonContainer id={id} />;
};

export default PersonPage;
