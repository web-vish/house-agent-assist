import React, { useEffect } from "react";
import PLPTemplate from "../../templates/PLPTemplate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProperties, modifyProperties } from "../../api";

export default function MainPage() {
  const queryClient = useQueryClient();
  const { isLoading, isFetched, data, error } = useQuery({
    queryKey: ["propertiesList"],
    queryFn: (params) => getProperties(params),
  });

  const mutation = useMutation({
    mutationFn: modifyProperties,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["propertiesList"],
      });
    },
  });

  const handleFilterRequest = (params) => {
    console.log("params", params);
    queryClient.fetchQuery({
      queryKey: ["propertiesList"],
      queryFn: () => getProperties(params),
    });
  };

  const handleExpireCallback = (id, data) => {
    mutation.mutate({ id, data });
  };

  return (
    <PLPTemplate
      data={data}
      isLoading={isLoading}
      isFetched={isFetched}
      error={error}
      onClickExpire={handleExpireCallback}
      handleFilterRequest={handleFilterRequest}
    />
  );
}
