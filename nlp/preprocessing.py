import jieba
import nltk
import string
import os

def chinese_tokenizer(text, remove_stopwords=True):
	''' segments the chinese text into words '''
	
	jieba.enable_parallel(4) # parallel processing
	text = text.strip().encode('UTF-8')
	words = list(jieba.cut(text))

	if remove_stopwords:
		# Remove stopwords
		d = os.path.dirname(__file__) if "__file__" in locals() else os.getcwd()
		filepath = os.path.join(d, 'nlp/wc_cn/stopwords_cn_en.txt')
		stopwords = open(filepath).read().splitlines()
		
		words = [word.strip() for word in words]
		words = [word for word in words if word and word not in stopwords and len(word) > 1]

	return words


def default_tokenizer(text, lang='english', remove_stopwords=True, remove_punct=False):
	''' assumes english-like text to be tokenized '''
	
	tokenized = []
	sentences = nltk.tokenize.PunktSentenceTokenizer().tokenize(text)
	
	for sentence in sentences:
		words = nltk.word_tokenize(sentence.lower().strip())
		words = [word.strip() for word in words]

		if remove_stopwords:
			stopwords = nltk.corpus.stopwords.words(lang)
			if remove_punct:
				stopwords.extend(list(string.punctuation))
			words = [word for word in words if word and word not in stopwords]

		tokenized.append(words)

	return tokenized
