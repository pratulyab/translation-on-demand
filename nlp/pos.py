#flair imports
from flair.data import Sentence
from flair.models import SequenceTagger

def flair_ner():
    sentence = Sentence("Apple is looking at buying U.K. startup for $1 billion but Apple is being sued by donald trump for fraud against the WHO..")
    tagger = SequenceTagger.load('pos')
    tagger.predict(sentence)
    print(sentence)
    print('The following POS tags are found:')
    # iterate over entities and print
    temp = dict()
    for word in sentence.get_spans('pos'):
        if word.tag in temp:
            token_text = str(word.tokens)
            index = token_text[8:]
            endl = index.find(" ")
            index = index[:endl]
            temp[word.tag].append(index)
        else:
            token_text = str(word.tokens)
            index = token_text[8:]
            endl = index.find(" ")
            index = index[:endl]
            temp[word.tag] = list()
            temp[word.tag].append(index)
    print(temp)
    return temp
       # print(dir(entity))
    

if __name__ == "__main__":
    print ("flair -- POS ")
    flairNerDict = flair_ner()
  #  ret_json(flairNerDict)
