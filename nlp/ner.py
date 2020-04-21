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
#import spacy

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


def flair_ner(lanugage, input):
    sentence = Sentence(input)
    if(lanugage == "french"):
        tagger = SequenceTagger.load('fr-ner')
    else:
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
   # spacyNerDict = spacy_ner()
   # print("spacy -- NER")
   # ret_json(spacyNerDict)
    print ("flair -- NER -- French")
    flairNerDict = flair_ner("french", "C'est tout simplement du jamais vu dans l'histoire pourtant tumultueuse du marché du pétrole. Le prix du baril de brut texan, le WTI, référence du marché américain, s'est littéralement effondré lundi. Sa valeur s'est volatilisée, annihilée même. En début de soirée à Paris, il cotait moins de 1 dollar. Puis il a basculé en territoire inconnu, en-dessous de zéro! Une chute de 95% dans la journée, atteignant finalement 100%, qui défie le sens commun. Cette incongruité est bel et bien une conséquence de la pandémie de Covid-19 et du Grand confinement, comme le désigne le Fonds monetaire international (FMI). Cette chute vertigineuse du WTI sur le marché américain ne signifie pas pour autant que le pétrole ne vaut absolument plus rien dans le monde entier. Le baril de Brent, produit en mer du Nord, la principale référence du marché mondial, a certes dévissé, mais d'«à peine» 6% et oscillait autour de 26 dollars.")
    ret_json(flairNerDict)

    print ("flair -- NER -- English")
    flairNerDict = flair_ner("english", "South Carolina allowed retail shops ranging from department stores to flea markets to reopen Monday afternoon, shortly after its governor, Henry McMaster, signed an executive order reversing some of the closings he ordered earlier this month. On Friday, residents of Georgia will be allowed to return to the gym and get haircuts, pedicures, massages and tattoos, Gov. Brian Kemp said. Next Monday, they can dine in restaurants and go to the movies. Tennessee's stay-at-home order will expire April 30, allowing most businesses there to reopen on May 1, Gov. Bill Lee said.")
    ret_json(flairNerDict)
