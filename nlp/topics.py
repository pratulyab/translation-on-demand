from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from .preprocessing import *
import gensim


def get_keywords(text, lang='english', n=10):
	''' Returns most important keywords from a doc '''

	if lang == 'chinese':
		tokenized_text = chinese_tokenizer(text)
		text = [' '.join(tokenized_text)]
	else:
		tokenized_text = default_tokenizer(text, lang=lang)
		text = [' '.join(sent) for sent in tokenized_text]

	bow = CountVectorizer(text, ngram_range=(1,2))
	cv = bow.fit_transform(text)

	tfidf = TfidfTransformer()
	tfidf_weights = tfidf.fit_transform(cv)
	tfidf_weights = tfidf_weights.mean(axis=0).ravel().tolist()

	word_weight_pairs = list(zip(bow.get_feature_names(), *tfidf_weights))
	# since this is supposed to work for single doc, idf is ignored in a way.
	# hence, instead of computing reverse=True, we are taking ascending order.
	# that is because, only term frequencies are being considered!
	word_weight_pairs = sorted(word_weight_pairs, key=lambda x: x[1], reverse=False)
	keywords = [pair[0] for pair in word_weight_pairs][:n]

	return keywords


def get_topics(documents, lang='english', n=6):
	''' Return topics from a set of docs '''

	if not isinstance(documents, list):
		documents = [documents]

	docs = []
	for document in documents:
		doc = None
		if lang == 'chinese':
			tokens = chinese_tokenizer(document)
		else:
			tokens = []
			[tokens.extend(sent) for sent in default_tokenizer(document, lang=lang, remove_punct=True)]
		docs.append(tokens)

	dictionary = gensim.corpora.Dictionary(docs)
	doc_term_matrix = [dictionary.doc2bow(doc) for doc in docs]

	lda_model = gensim.models.ldamodel.LdaModel(doc_term_matrix, num_topics=min(len(docs), n), id2word=dictionary, passes=50)

	topics = [topic[1] for topic in lda_model.show_topics()]
	topics = [topic.split('"')[1::2] for topic in topics]

	return topics

#	if len(documents) == 1:
#		# return top 'n' important keywords
#		return get_keywords(documents[0], lang=lang, n=n)

	
