function getName(firstname: string, lastname?: string) {
    if (lastname) {
      return `${firstname} ${lastname}`;
    } else {
      return firstname;
    }
  }
  export default getName