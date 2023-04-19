import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const KanjiCards = ({ kanjiList }) => {
  const [currentKanjiIndex, setCurrentKanjiIndex] = useState(0);

  const nextKanji = () => {
    setCurrentKanjiIndex((currentKanjiIndex + 1) % kanjiList.length);
  };

  const prevKanji = () => {
    setCurrentKanjiIndex(
      (currentKanjiIndex + kanjiList.length - 1) % kanjiList.length
    );
  };

  const currentKanji = kanjiList[currentKanjiIndex];

  return (
    <div className="container mx-auto max-w-lg mt-8">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-5xl font-bold mb-2">
            {currentKanji.kanji}
          </Card.Title>
          <Card.Subtitle className="text-lg mb-2 text-gray-600">
            {currentKanji.meaning}
          </Card.Subtitle>
          <Card.Text className="text-base mb-4">
            {currentKanji.examples.map((example) => (
              <p key={example} className="mb-2">
                {example}
              </p>
            ))}
          </Card.Text>
          <div className="flex justify-between">
            <Button
              variant="primary"
              onClick={prevKanji}
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white"
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={nextKanji}
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white"
            >
              Next
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

