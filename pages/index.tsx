import Router from 'next/router';
import { useMount } from 'react-use';
export default function Index() {
  useMount(() => {
    void Router.replace('/home');
  });
  return <></>;
}
