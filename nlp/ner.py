# NLP Task - NER
# AllenNLP/SpaCy/FlairNLP
# Return JSON as:
# {
# 'tag1': [1, 10, 11, 14, 23] # list of indices of words in text that belong to this tag,
# 'tag2': [35, 36],
# ...
# }
# Scale to different languages as discussed

#general imports
import json

#spacy imports
import spacy

#flair imports
from flair.data import Sentence
from flair.models import SequenceTagger

# a python dictionary

def spacy_ner():
    nlp = spacy.load("en_core_web_sm")
    doc = nlp("Apple is looking at buying U.K. startup for $1 billion but Apple is being sued by donald trump for fraud against the WHO.")
    temp = dict()
    for ent in doc.ents:
        if ent.text in temp:
            temp[ent.text].append(ent.start)
        else:
            temp[ent.text] = list()
            temp[ent.text].append(ent.start)
          #  temp[ent.text].append()
        
    return temp


def flair_ner():
    sentence = Sentence("Apple is looking at buying U.K. startup for $1 billion but Apple is being sued by donald trump for fraud against the WHO..")
    tagger = SequenceTagger.load('ner')
    tagger.predict(sentence)
    print(sentence)
    print('The following NER tags are found:')
    # iterate over entities and print
    temp = dict()
    for entity in sentence.get_spans('ner'):
        if entity.text in temp:
            word = str(entity.tokens)
            index = word[8:]
            endl = index.find(" ")
            index = index[:endl] 
            temp[entity.text].append(index)
        else:
            word = str(entity.tokens)
            index = word[8:]
            endl = index.find(" ")
            index = index[:endl]
            temp[entity.text] = list()
            temp[entity.text].append(index)
    return temp

def ret_json(jsDict):
    newJson = json.dumps(jsDict)
    print(newJson)

if __name__ == "__main__":
    spacyNerDict = spacy_ner()
    print("spacy -- NER")
    ret_json(spacyNerDict)
    print ("flair -- NER ")
    flairNerDict = flair_ner()
    ret_json(flairNerDict)
