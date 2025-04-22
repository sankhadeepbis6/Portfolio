import React, { useState, useEffect } from 'react';
import styles from './CodeBackground.module.css';

const titlesLeft = [
    "@Service",
    "public class MongoQueryExecutor {",
    "\tprivate final MongoClient mongoClient;",
    "\tprivate final MongoDatabase database;",
    "\n",
    "\tpublic MongoQueryExecutor(MongoClient mongoClient,",
    "\t\tString databaseName) {",
    "\t\tthis.mongoClient = mongoClient;",
    "\t\tthis.database = mongoClient.getDatabase(databaseName);",
    "\t}",
    "\n",
    "\tpublic FindIterable<Document> executeQuery(String collectionName, String key, String value) {",
    "\t\tMongoCollection<Document> collection = database.getCollection(collectionName);",
    "\t\treturn collection.find(eq(key, value));",
    "\t}",
    "\n",
    "\tpublic AggregateIterable<Document> executeAdvancedAggregationQuery(String collectionName, double amountThreshold, Date startDate, Date endDate) {",
    "\t\tMongoCollection<Document> collection = database.getCollection(collectionName);",
    "\n",
    "\t\tAggregateIterable<Document> result = collection.aggregate(Arrays.asList(",
    "\t\t\tmatch(and(",
    "\t\t\t\tgte(\"amount\", amountThreshold),",
    "\t\t\t\tgte(\"date\", startDate),",
    "\t\t\t\tlte(\"date\", endDate)",
    "\t\t\t)),",
    "\n",
    "\t\t\taddFields(new Document(\"discountedAmount\", new Document(\"$multiply\", Arrays.asList(\"$amount\", 0.9)))),",
    "\n",
    "\t\t\tfacet(",
    "\t\t\t\tnew Document(\"categoryCount\", Arrays.asList(",
    "\t\t\t\t\tgroup(\"$category\", sum(\"count\", 1))",
    "\t\t\t\t)),",
    "\n",
    "\t\t\t\tnew Document(\"dateAmount\", Arrays.asList(",
    "\t\t\t\t\tgroup(\"$date\", sum(\"totalAmount\", \"$amount\"))",
    "\t\t\t\t))",
    "\t\t),",
    "\n",
    "\t\t\taddFields(new Document(\"transformedItems\", new Document(\"$map\", new Document(\"input\", \"$items\")",
    "\t\t\t\t.append(\"as\", \"item\")",
    "\t\t\t\t.append(\"in\", new Document(\"name\", \"$$item.name\")",
    "\t\t\t\t\t.append(\"price\", new Document(\"$multiply\", Arrays.asList(\"$$item.price\", 1.1))))))),",
    "\n",
    "\t\t\tsort(new Document(\"discountedAmount\", -1))",
    "\n",
    "\t));",
    "\n",
    "\t\treturn result;",
    "\n",
    "}"
];

const titlesRight = [
    "import React, { useEffect, useState } from 'react';",
    "import './ItemList.css';",
    "\n",
    "const ItemList = () => {",
    "\tconst [items, setItems] = useState([]);",
    "\tconst [loading, setLoading] = useState(true);",
    "\n",
    "\tuseEffect(() => {",
    "\t\tconst apiUrl = process.env.REACT_APP_ITEMS_API;",
    "\n",
    "\t\tfetch(apiUrl)",
    "\t\t\t.then(res => res.json())",
    "\t\t\t.then(data => {",
    "\t\t\t\tconst enriched = data.map((item, index) => ({",
    "\t\t\t\t\t...item,",
    '\t\t\t\t\tdescription: `This is a description,',
    "\t\t\t\t\tdate: new Date().toLocaleDateString(),",
    '\t\t\t\t\tlocation: `Location',
    "\t\t\t\t}));",
    "\t\t\t\tsetItems(enriched);",
    "\t\t\t\tsetLoading(false);",
    "\t\t\t})",
    "\t\t\t.catch(err => {",
    '\t\t\t\tconsole.error("Failed to fetch items:", err);',
    "\t\t\t\tsetLoading(false);",
    "\t\t\t});",
    "\t}, []);",
    "\n",
    "\tif (loading) return <p>Loading...</p>;",
    "\n",
    "\treturn (",
    '\t\t<div className="item-list-container">',
    '\t\t\t<h2 className="item-list-title">Item List</h2>',
    '\t\t\t<div className="item-list">',
    "\t\t\t\t{items.map(item => (",
    '\t\t\t\t\t<div key={item.id} className="item">',
    '\t\t\t\t\t\t<strong className="item-title">{item.title}</strong>',
    '\t\t\t\t\t\t<p className="item-description">{item.description}</p>',
    '\t\t\t\t\t\t<p className="item-detail"><strong>Date:</strong> {item.date}</p>',
    '\t\t\t\t\t\t<p className="item-detail"><strong>Location:</strong> {item.location}</p>',
    '\t\t\t\t\t\t<div className="item-buttons">',
    '\t\t\t\t\t\t\t<button className="btn btn-view">View</button>',
    '\t\t\t\t\t\t\t<button className="btn btn-edit">Edit</button>',
    '\t\t\t\t\t\t\t<button className="btn btn-delete">Delete</button>',
    "\t\t\t\t\t\t</div>",
    "\t\t\t\t\t</div>",
    "\t\t\t\t))}",
    "\t\t\t</div>",
    "\t\t</div>",
    "\t);",
    "};",
    "\n",
    "export default ItemList;"
];

const useTypingEffect = (titles) => {
    const [lines, setLines] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout;
        const currentLine = titles[lineIndex] || '';

        if (!isDeleting) {
            if (charIndex <= currentLine.length) {
                timeout = setTimeout(() => {
                    const updatedLines = [...lines];
                    updatedLines[lineIndex] = currentLine.substring(0, charIndex);
                    setLines(updatedLines);
                    setCharIndex((prev) => prev + 1);
                }, 100);
            } else {
                if (lineIndex < titles.length - 1) {
                    timeout = setTimeout(() => {
                        setLineIndex((prev) => prev + 1);
                        setCharIndex(0);
                    }, 400);
                } else {
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                        setCharIndex(currentLine.length);
                    }, 1500);
                }
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    const updatedLines = [...lines];
                    updatedLines[lineIndex] = currentLine.substring(0, charIndex - 1);
                    setLines(updatedLines);
                    setCharIndex((prev) => prev - 1);
                }, 40);
            } else {
                if (lineIndex > 0) {
                    timeout = setTimeout(() => {
                        setLineIndex((prev) => prev - 1);
                        setCharIndex(titles[lineIndex - 1].length);
                    }, 40);
                } else {
                    timeout = setTimeout(() => {
                        setIsDeleting(false);
                        setLineIndex(0);
                        setCharIndex(0);
                        setLines([]);
                    }, 200);
                }
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, lineIndex, isDeleting, lines, titles]);

    return { lines, lineIndex };
};

const CodeBackground = () => {
    const { lines: leftLines, lineIndex: leftIndex } = useTypingEffect(titlesLeft);
    const { lines: rightLines, lineIndex: rightIndex } = useTypingEffect(titlesRight);

    return (
        <div className={styles.profileTitle}>
            <div className={styles.typingWrapper}>
                <div className={styles.column}>
                    {leftLines.map((line, i) => (
                        <div key={i}>
                            {line}{i === leftIndex && <span className={styles.cursor}>|</span>}
                        </div>
                    ))}
                </div>
                <div className={`${styles.column} ${styles.rightColumn}`}>
                    {rightLines.map((line, i) => (
                        <div key={i}>
                            {line}{i === rightIndex && <span className={styles.cursor}>|</span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CodeBackground;
