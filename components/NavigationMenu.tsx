import Link from 'next/link';

type NavigationMenu = {
  device: string;
  state?: boolean;
  textColorOnScroll?: string
};

export default function NavigationMenu({ device, state, textColorOnScroll }: NavigationMenu) {
  const styles = {
    desktop: {
      ul: `hidden sm:flex gap-4 p-2`,
      li: ``,
    },
    mobile: {
      ul: `${
        state
          ? `sm:hidden absolute top-0 left-0 bottom-0 right-0 bg-black w-full h-screen flex flex-col justify-center items-center ease-in duration-300`
          : `sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 bg-black w-full h-screen flex flex-col justify-center items-center ease-in duration-300`
      }`,
      li: `text-2xl py-4 hover:text-[#E14D2A]`,
    },
  };
  const currentDevice = device === 'desktop' ? styles.desktop : styles.mobile;
  return (
    <ul style={{color: `${textColorOnScroll}`}} className={currentDevice.ul}>
      <li className={currentDevice.li}>
        <Link href='/'>Home</Link>
      </li>
      <li className={currentDevice.li}>
        <Link href='/#galary'>Galery</Link>
      </li>
      <li className={currentDevice.li}>
        <Link href='/work'>work</Link>
      </li>
      <li className={currentDevice.li}>
        <Link href='/contact'>contact</Link>
      </li>
    </ul>
  );
}
