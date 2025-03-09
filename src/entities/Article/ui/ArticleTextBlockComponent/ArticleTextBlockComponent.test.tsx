import React from "react";
import { render } from "@testing-library/react";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";
import { ArticleBlockType } from "entities/Article/model/type/article";

describe("ArticleTextBlockComponent", () => {
  const mockBlock = {
    id: "7",
    type: ArticleBlockType.TEXT as ArticleBlockType.TEXT,
    title: "Sample Title",
    paragraphs: [
      "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
      "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
    ],
  };

  it("renders with title and paragraphs", () => {
    const { getByText } = render(
      <ArticleTextBlockComponent block={mockBlock} />
    );

    // Check if the title is rendered
    expect(getByText("Sample Title")).toBeInTheDocument();

    // Check if each paragraph is rendered
    mockBlock.paragraphs.forEach((paragraph) => {
      expect(getByText(paragraph)).toBeInTheDocument();
    });
  });

  it("renders without title", () => {
    const { queryByText } = render(
      <ArticleTextBlockComponent block={{ ...mockBlock, title: undefined }} />
    );

    // Check if each paragraph is still rendered
    mockBlock.paragraphs.forEach((paragraph) => {
      expect(queryByText(paragraph)).toBeInTheDocument();
    });
  });

  it("renders without paragraphs", () => {
    const { queryByText } = render(
      <ArticleTextBlockComponent block={{ ...mockBlock, paragraphs: [] }} />
    );

    // Check that no paragraphs are rendered
    mockBlock.paragraphs.forEach((paragraph) => {
      expect(queryByText(paragraph)).toBeNull();
    });
  });

  it("renders with custom className", () => {
    const { container } = render(
      <ArticleTextBlockComponent
        block={mockBlock}
        className="custom-article-class"
      />
    );

    // Check if the component has the custom className
    expect(container.firstChild).toHaveClass("custom-article-class");
  });
});
