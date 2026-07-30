import "github-fork-ribbon-css/gh-fork-ribbon.css";
import "../src/index.css";
import "../src/Header.css";
import "../src/SearchInput.css";
import "../src/EmojiResults.css";
import "../src/EmojiResultRow.css";

export const metadata = {
  title: "Emoji Search",
  description: "Search for emoji by name or keyword"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <a
          className="github-fork-ribbon"
          href="https://github.com/ahfarmer/emoji-search"
          title="Fork me on GitHub"
        >
          Fork me on GitHub
        </a>
      </body>
    </html>
  );
}
