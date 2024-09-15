import React from "react";
import Typography from "../../atoms/Typography";
import Container from "../../atoms/Container";
import Logo from "../../molecules/Logo";
import styles from './Header.module.scss'
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Container type='flex-row-space-even'>
        <Logo/>
        <section>
          <Typography type="h1">Agent Assist</Typography>
        </section>
        <section className={styles.userInfo}>
          <Typography type="p">Welcome <strong>John</strong></Typography>
        </section>
      </Container>
    </header>
  );
}
