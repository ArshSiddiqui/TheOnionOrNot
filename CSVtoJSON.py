import csv
import json

def csvToJSON(file, jsonFile):
	articles = []

	with open(file, encoding='utf-8') as csvf:
		csvReader = csv.DictReader(csvf)

		for rows in csvReader:
			articles.append(rows)

	with open(jsonFile, 'w', encoding='utf-8') as jsonf:
		jsonf.write(json.dumps(articles, indent=4, ensure_ascii=False))

csvToJSON('OnionOrNot.csv', 'articles.json')