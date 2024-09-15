import React, { useMemo } from "react";
import styles from "./PropCard.module.scss";
import Badges from "../../atoms/Badges";
import { FaHeartCirclePlus, FaMinus, FaRegImage } from "react-icons/fa6";
import Button from "../../atoms/Buttons";
import NearBy from "../../molecules/Nearby";
import PropsHighlights from "../../molecules/PropHighlights";
import LeaseDetails from "../../molecules/LeaseDetails";
import Container from "../../atoms/Container";
import Card from "../../atoms/Card";
import { FaMinusSquare } from "react-icons/fa";
import { modifyProperties } from "../../api";

export default function PropCard({ data, onClickExpire }) {
  const {
    id,
    images = [],
    imageCount = 0,
    address,
    details,
    metaInfo: { highlights = "", listedDate },
    nearby = [],
    leaseDetails = [],
    guidePrice = "N/A",
    agency,
    status,
  } = data;

  const formattedListedDate = useMemo(
    () =>
      new Date(listedDate).toLocaleString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [listedDate]
  );

  const onExpireHandle = (id) => {
    onClickExpire(id, {
      ...data,
      status: "inactive",
      metaInfo:{
        highlights: "Expired",
        listedDate
      }
    });
  };

  return (
    <Container type="flex-col">
      <Card>
        <section className={styles.mainContainer}>
          <section className={styles.imageSection}>
            {images && images.length && <img src={images[0]} />}
            {highlights && (
              <Badges type={status === "inactive" ? "expired" : ""}>
                {status === "inactive" ? "Expired" : highlights}
              </Badges>
            )}
            {imageCount && (
              <Badges type={"dark"}>
                <FaRegImage /> {imageCount}
              </Badges>
            )}
          </section>
          <section className={styles.detailsSection}>
            <div>
              <p className={styles.priceTitle}>Guide Price</p>
              <p className={styles.priceValue}>{guidePrice}</p>
            </div>
            <PropsHighlights data={details} />
            <address>
              {address.street}, {address.postcode}
            </address>
            <NearBy data={nearby} />
            <LeaseDetails data={leaseDetails} />
            {agency.image && agency.image != "" && (
              <section className={styles.agencyLogo}>
                <img src={agency.image}></img>
              </section>
            )}
          </section>
        </section>
        <section className={styles.metaInfo}>
          <p>
            Listed on: <strong>{formattedListedDate}</strong>
          </p>
          {status === "active" && (
            <Button
              type="text"
              className={styles.expired}
              onClick={(e) => {
                console.log("id", id);
                onExpireHandle(id);
              }}
            >
              <FaMinusSquare /> Mark as Expired
            </Button>
          )}
        </section>
      </Card>
    </Container>
  );
}
