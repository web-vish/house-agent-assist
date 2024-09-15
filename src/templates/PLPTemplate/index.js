import React from "react";
import Header from "../../organisms/Header";
import PropCard from "../../organisms/PropCard";
import styles from "./PLPTemplate.module.scss";
import Typography from "../../atoms/Typography";
import Container from "../../atoms/Container";
import Loader from "../../atoms/Loader";
import Card from "../../organisms/PropCard";
import Button from "../../atoms/Buttons";
import {
  FaCheck,
  FaCheckDouble,
  FaEnvelope,
  FaMailchimp,
  FaTicket,
} from "react-icons/fa6";
import { FaMinusCircle, FaMinusSquare } from "react-icons/fa";

export default function PLPTemplate({
  isLoading,
  isFetched,
  error,
  data,
  onClickExpire,
  handleFilterRequest,
}) {
  const onFilterClick = (filterType) => {
    handleFilterRequest(filterType);
  };

  return (
    <div className={styles.plpTemplate}>
      <Header />
      <main>
        {isLoading && !isFetched ? (
          <Container type="flex-col-center">
            <Loader />
          </Container>
        ) : (
          <Container type="flex-col">
            <section className={styles.resultTitleContainer}>
              <Typography type="h2">Your Listed Properties</Typography>
            </section>
            <section className={styles.resultsContainer}>
              <aside>
                <section className={styles.filtersContainer}>
                  <div>
                    <Button onClick={() => onFilterClick("all")}>
                      {" "}
                      <FaCheckDouble /> Show All Properties
                    </Button>
                    <Button onClick={() => onFilterClick("active")}>
                      {" "}
                      <FaCheck /> Show Active Only
                    </Button>
                    <Button
                      type="secondary"
                      onClick={() => onFilterClick("inactive")}
                    >
                      {" "}
                      <FaMinusSquare /> Show Expired Only
                    </Button>
                  </div>
                  <section>
                    <Button type="text" className="filterBtn">
                      New to Market
                    </Button>
                    <Button type="text" className="filterBtn">
                      Saved Searches and History
                    </Button>
                    <Button type="text" className="filterBtn">
                      Highly Viewed Properties
                    </Button>
                  </section>
                </section>
              </aside>
              <section className={styles.cardSectionWrapper}>
                {!data.length ? (
                  <section>
                    <Typography type="h3">No Properties found</Typography>
                  </section>
                ) : (
                  data.map((propItem, index) => (
                    <PropCard
                      data={propItem}
                      key={"cards" + index}
                      onClickExpire={onClickExpire}
                    />
                  ))
                )}
              </section>
            </section>
          </Container>
        )}
      </main>
      <footer>
        <Container type="flex-col"></Container>
      </footer>
    </div>
  );
}
