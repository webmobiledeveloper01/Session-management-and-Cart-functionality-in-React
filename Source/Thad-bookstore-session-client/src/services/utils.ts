export const setNavLink = (categoryName: string) => {
    const words = categoryName.split(" ");
    return words.length > 1 ? words.join("-") : words[0];
}

export const setCategoryName = (link: string) => {
    const words = link.split("-");
    // const newWords = words.map((word) => word[0].toUpperCase() + word.slice(1));
    return words.length > 1 ? words.join(" ") : words[0];
}

export function getSlug(name: string): string {
    name = name.toLowerCase();
    name = name.replace(/ /g, "-");
    name = name.replace(/"'"/, "");
    return name;
}
 
export const apiUrl = 
  `${location.protocol}//${location.hostname}:` + 
  `${location.port === '5173' ? '8080' : location.port}` + 
  `${import.meta.env.BASE_URL}/api`;

export const bookImagePrefix = `${import.meta.env.BASE_URL}/book-images/`;

// From https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const PriceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  
  export const asDollarsAndCents = function (cents: number) {
    return PriceFormatter.format(cents / 100.0);
  };
  

