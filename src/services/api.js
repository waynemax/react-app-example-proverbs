export function queryTreatment(data) {
  switch (typeof data) {
    case 'object':
      switch (data.status) {
        case 200: {
          const response = data.data;
          if (response.errors.length > 0) {
            response.errors.map(error => {
              console.error('#QueryTreatment', error);
            })
          }
          return response.data[0];
        }
        default:
          console.error('#QueryTreatment: status code !== 200');
          break;
      }
      break;
    default:
      console.error('#QueryTreatment: unknownError');
      break;
  }
}