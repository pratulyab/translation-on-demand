# NLP Task - POS
# AllenNLP/SpaCy/FlairNLP/Pre-trained models
# Return JSON as:
# {
# 'tag1': [1, 10, 11, 14, 23] # list of indices of words in text that belong to this tag,
# 'tag2': [35, 36],
# ...
# }
# Scale to different languages as discussed

#flair imports
from flair.data import Sentence
from flair.models import SequenceTagger
import json

def flair_pos(language, input):
    sentence = Sentence(input)
    if(language == "french"):
        tagger = SequenceTagger.load("pos-multi")
        tagger.predict(sentence)
        annotated = sentence.to_tagged_string()
        print(annotated)
        temp = dict()
        boolean = True
        count = 1
        while(boolean):
            index = annotated.find("<")
            end_index = annotated.find(">")
            if(index != -1 ) and (end_index != -1):
                
                #annotated = annotated[index+1:]
                print("start", index)
                print("end", end_index)
                pos = annotated[index:end_index+1]
                print("POS", pos)
                #print(annotated.find("<"))
                annotated = annotated[end_index+1:]
                
                if(pos in temp):
                    temp[pos].append(count)
                else:
                    temp[pos] = list()
                    temp[pos].append(count)
              #  print(annotated)
                count = count +1 
            else:
                boolean = False
        print(temp)
        #sreturn temp
    else:
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
    
    return dict()
       # print(dir(entity))

def ret_json(jsDict):
    newJson = json.dumps(jsDict)
    print(newJson)

if __name__ == "__main__":
    print ("flair -- POS -- english")
    flairPosDict = flair_pos("english", "Apple is looking at buying U.K. startup for $1 billion but Apple is being sued by donald trump for fraud against the WHO.")
    ret_json(flairPosDict)
    print ("flair -- POS -- french")
    flairPosDict = flair_pos("french", "C'est tout simplement du jamais vu dans l'histoire pourtant tumultueuse du marché du pétrole. Le prix du baril de brut texan, le WTI, référence du marché américain, s'est littéralement effondré lundi. Sa valeur s'est volatilisée, annihilée même. En début de soirée à Paris, il cotait moins de 1 dollar. Puis il a basculé en territoire inconnu, en-dessous de zéro! Une chute de 95% dans la journée, atteignant finalement 100%, qui défie le sens commun. Cette incongruité est bel et bien une conséquence de la pandémie de Covid-19 et du Grand confinement, comme le désigne le Fonds monetaire international (FMI). Cette chute vertigineuse du WTI sur le marché américain ne signifie pas pour autant que le pétrole ne vaut absolument plus rien dans le monde entier. Le baril de Brent, produit en mer du Nord, la principale référence du marché mondial, a certes dévissé, mais d'«à peine» 6% et oscillait autour de 26 dollars.")
    ret_json(flairPosDict)
