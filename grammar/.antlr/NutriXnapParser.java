// Generated from c:/Users/Hermane/ter dev/RuleInterpreter/grammar/NutriXnap.g by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class NutriXnapParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ComparraisonOperator=1, LogicOperator=2, Number=3, DEFINE=4, GLOB=5, RETURN=6, 
		ASSIGN=7, IF=8, THEM=9, ELIF=10, ELSE=11, LPAREN=12, RPAREN=13, LBRACE=14, 
		RBRACE=15, COLON=16, SEMICOLON=17, COMMA=18, PLUS=19, MINUS=20, QUESTIONMARK=21, 
		MULTIPLY=22, DIVIDE=23, LESSTHAN=24, MORETHAN=25, LESSTHANEQUAL=26, MORETHANEQUAL=27, 
		EQUALS=28, NOTEQUAL=29, AND=30, OR=31, ID=32, INT=33, FLOAT=34, COMMENT=35, 
		WS=36, STRING=37, CHAR=38;
	public static final int
		RULE_script = 0, RULE_statement = 1, RULE_definition = 2, RULE_globalDefinition = 3, 
		RULE_functionCall = 4, RULE_returnSatement = 5, RULE_ifCoditionStatement = 6, 
		RULE_ternaryConditionalStatement = 7, RULE_condition = 8, RULE_comparaison = 9, 
		RULE_logicalComparaison = 10, RULE_value = 11, RULE_expression = 12, RULE_arithMeticExpression = 13, 
		RULE_arithTerm = 14, RULE_arithFactor = 15, RULE_object = 16, RULE_keyValue = 17;
	private static String[] makeRuleNames() {
		return new String[] {
			"script", "statement", "definition", "globalDefinition", "functionCall", 
			"returnSatement", "ifCoditionStatement", "ternaryConditionalStatement", 
			"condition", "comparaison", "logicalComparaison", "value", "expression", 
			"arithMeticExpression", "arithTerm", "arithFactor", "object", "keyValue"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'define'", "'global'", "'return'", "'='", "'if'", 
			"'then'", "'else if'", "'else'", "'('", "')'", "'{'", "'}'", "':'", "';'", 
			"','", "'+'", "'-'", "'?'", "'*'", "'/'", "'<'", "'>'", "'<='", "'>='", 
			"'=='", "'!='", "'&&'", "'||'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ComparraisonOperator", "LogicOperator", "Number", "DEFINE", "GLOB", 
			"RETURN", "ASSIGN", "IF", "THEM", "ELIF", "ELSE", "LPAREN", "RPAREN", 
			"LBRACE", "RBRACE", "COLON", "SEMICOLON", "COMMA", "PLUS", "MINUS", "QUESTIONMARK", 
			"MULTIPLY", "DIVIDE", "LESSTHAN", "MORETHAN", "LESSTHANEQUAL", "MORETHANEQUAL", 
			"EQUALS", "NOTEQUAL", "AND", "OR", "ID", "INT", "FLOAT", "COMMENT", "WS", 
			"STRING", "CHAR"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "NutriXnap.g"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public NutriXnapParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScriptContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(NutriXnapParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(NutriXnapParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(NutriXnapParser.SEMICOLON, i);
		}
		public ScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_script; }
	}

	public final ScriptContext script() throws RecognitionException {
		ScriptContext _localctx = new ScriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_script);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4294967664L) != 0)) {
				{
				{
				setState(36);
				statement();
				setState(37);
				match(SEMICOLON);
				}
				}
				setState(43);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(44);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public DefinitionContext definition() {
			return getRuleContext(DefinitionContext.class,0);
		}
		public GlobalDefinitionContext globalDefinition() {
			return getRuleContext(GlobalDefinitionContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public ReturnSatementContext returnSatement() {
			return getRuleContext(ReturnSatementContext.class,0);
		}
		public IfCoditionStatementContext ifCoditionStatement() {
			return getRuleContext(IfCoditionStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(51);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DEFINE:
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				definition();
				}
				break;
			case GLOB:
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				globalDefinition();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(48);
				functionCall();
				}
				break;
			case RETURN:
				enterOuterAlt(_localctx, 4);
				{
				setState(49);
				returnSatement();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 5);
				{
				setState(50);
				ifCoditionStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefinitionContext extends ParserRuleContext {
		public TerminalNode DEFINE() { return getToken(NutriXnapParser.DEFINE, 0); }
		public TerminalNode ID() { return getToken(NutriXnapParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(NutriXnapParser.ASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public DefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_definition; }
	}

	public final DefinitionContext definition() throws RecognitionException {
		DefinitionContext _localctx = new DefinitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_definition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(DEFINE);
			setState(54);
			match(ID);
			setState(55);
			match(ASSIGN);
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				{
				setState(56);
				value();
				}
				break;
			case 2:
				{
				setState(57);
				functionCall();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GlobalDefinitionContext extends ParserRuleContext {
		public TerminalNode GLOB() { return getToken(NutriXnapParser.GLOB, 0); }
		public TerminalNode ID() { return getToken(NutriXnapParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(NutriXnapParser.ASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public GlobalDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_globalDefinition; }
	}

	public final GlobalDefinitionContext globalDefinition() throws RecognitionException {
		GlobalDefinitionContext _localctx = new GlobalDefinitionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_globalDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(GLOB);
			setState(61);
			match(ID);
			setState(62);
			match(ASSIGN);
			setState(65);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(63);
				value();
				}
				break;
			case 2:
				{
				setState(64);
				functionCall();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(NutriXnapParser.ID, 0); }
		public TerminalNode LPAREN() { return getToken(NutriXnapParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(NutriXnapParser.RPAREN, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(NutriXnapParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(NutriXnapParser.COMMA, i);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(ID);
			setState(68);
			match(LPAREN);
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 141733924872L) != 0)) {
				{
				setState(69);
				value();
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(70);
					match(COMMA);
					setState(71);
					value();
					}
					}
					setState(76);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(79);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnSatementContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(NutriXnapParser.RETURN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public ReturnSatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnSatement; }
	}

	public final ReturnSatementContext returnSatement() throws RecognitionException {
		ReturnSatementContext _localctx = new ReturnSatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_returnSatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(RETURN);
			setState(84);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(82);
				value();
				}
				break;
			case 2:
				{
				setState(83);
				functionCall();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfCoditionStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(NutriXnapParser.IF, 0); }
		public List<TerminalNode> LPAREN() { return getTokens(NutriXnapParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(NutriXnapParser.LPAREN, i);
		}
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(NutriXnapParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(NutriXnapParser.RPAREN, i);
		}
		public TerminalNode THEM() { return getToken(NutriXnapParser.THEM, 0); }
		public List<TerminalNode> LBRACE() { return getTokens(NutriXnapParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(NutriXnapParser.LBRACE, i);
		}
		public List<TerminalNode> RBRACE() { return getTokens(NutriXnapParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(NutriXnapParser.RBRACE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(NutriXnapParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(NutriXnapParser.SEMICOLON, i);
		}
		public List<TerminalNode> ELIF() { return getTokens(NutriXnapParser.ELIF); }
		public TerminalNode ELIF(int i) {
			return getToken(NutriXnapParser.ELIF, i);
		}
		public TerminalNode ELSE() { return getToken(NutriXnapParser.ELSE, 0); }
		public IfCoditionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifCoditionStatement; }
	}

	public final IfCoditionStatementContext ifCoditionStatement() throws RecognitionException {
		IfCoditionStatementContext _localctx = new IfCoditionStatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ifCoditionStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(IF);
			setState(87);
			match(LPAREN);
			setState(88);
			condition();
			setState(89);
			match(RPAREN);
			setState(90);
			match(THEM);
			setState(91);
			match(LBRACE);
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4294967664L) != 0)) {
				{
				{
				setState(92);
				statement();
				setState(93);
				match(SEMICOLON);
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(100);
			match(RBRACE);
			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELIF) {
				{
				{
				setState(101);
				match(ELIF);
				setState(102);
				match(LPAREN);
				setState(103);
				condition();
				setState(104);
				match(RPAREN);
				setState(105);
				match(LBRACE);
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4294967664L) != 0)) {
					{
					{
					setState(106);
					statement();
					setState(107);
					match(SEMICOLON);
					}
					}
					setState(113);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(114);
				match(RBRACE);
				}
				}
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(121);
				match(ELSE);
				setState(122);
				match(LBRACE);
				setState(128);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4294967664L) != 0)) {
					{
					{
					setState(123);
					statement();
					setState(124);
					match(SEMICOLON);
					}
					}
					setState(130);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(131);
				match(RBRACE);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TernaryConditionalStatementContext extends ParserRuleContext {
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode QUESTIONMARK() { return getToken(NutriXnapParser.QUESTIONMARK, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public TerminalNode COLON() { return getToken(NutriXnapParser.COLON, 0); }
		public TernaryConditionalStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ternaryConditionalStatement; }
	}

	public final TernaryConditionalStatementContext ternaryConditionalStatement() throws RecognitionException {
		TernaryConditionalStatementContext _localctx = new TernaryConditionalStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ternaryConditionalStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			condition();
			setState(135);
			match(QUESTIONMARK);
			setState(136);
			value();
			setState(137);
			match(COLON);
			setState(138);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ParserRuleContext {
		public ComparaisonContext comparaison() {
			return getRuleContext(ComparaisonContext.class,0);
		}
		public List<LogicalComparaisonContext> logicalComparaison() {
			return getRuleContexts(LogicalComparaisonContext.class);
		}
		public LogicalComparaisonContext logicalComparaison(int i) {
			return getRuleContext(LogicalComparaisonContext.class,i);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(140);
				comparaison();
				}
				break;
			case 2:
				{
				setState(142); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(141);
					logicalComparaison();
					}
					}
					setState(144); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 141733924872L) != 0) );
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComparaisonContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public TerminalNode ComparraisonOperator() { return getToken(NutriXnapParser.ComparraisonOperator, 0); }
		public ComparaisonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparaison; }
	}

	public final ComparaisonContext comparaison() throws RecognitionException {
		ComparaisonContext _localctx = new ComparaisonContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_comparaison);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			value();
			setState(149);
			match(ComparraisonOperator);
			setState(150);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogicalComparaisonContext extends ParserRuleContext {
		public TerminalNode LogicOperator() { return getToken(NutriXnapParser.LogicOperator, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<ComparaisonContext> comparaison() {
			return getRuleContexts(ComparaisonContext.class);
		}
		public ComparaisonContext comparaison(int i) {
			return getRuleContext(ComparaisonContext.class,i);
		}
		public LogicalComparaisonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalComparaison; }
	}

	public final LogicalComparaisonContext logicalComparaison() throws RecognitionException {
		LogicalComparaisonContext _localctx = new LogicalComparaisonContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_logicalComparaison);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(152);
				value();
				}
				break;
			case 2:
				{
				setState(153);
				comparaison();
				}
				break;
			}
			setState(156);
			match(LogicOperator);
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				setState(157);
				value();
				}
				break;
			case 2:
				{
				setState(158);
				comparaison();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_value);
		try {
			setState(163);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Number:
			case ID:
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(161);
				expression();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(162);
				object();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(NutriXnapParser.Number, 0); }
		public TerminalNode ID() { return getToken(NutriXnapParser.ID, 0); }
		public TerminalNode STRING() { return getToken(NutriXnapParser.STRING, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 141733920776L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArithMeticExpressionContext extends ParserRuleContext {
		public List<ArithTermContext> arithTerm() {
			return getRuleContexts(ArithTermContext.class);
		}
		public ArithTermContext arithTerm(int i) {
			return getRuleContext(ArithTermContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(NutriXnapParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(NutriXnapParser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(NutriXnapParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(NutriXnapParser.MINUS, i);
		}
		public ArithMeticExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithMeticExpression; }
	}

	public final ArithMeticExpressionContext arithMeticExpression() throws RecognitionException {
		ArithMeticExpressionContext _localctx = new ArithMeticExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_arithMeticExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			arithTerm();
			setState(172);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLUS || _la==MINUS) {
				{
				{
				setState(168);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(169);
				arithTerm();
				}
				}
				setState(174);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArithTermContext extends ParserRuleContext {
		public List<ArithFactorContext> arithFactor() {
			return getRuleContexts(ArithFactorContext.class);
		}
		public ArithFactorContext arithFactor(int i) {
			return getRuleContext(ArithFactorContext.class,i);
		}
		public List<TerminalNode> DIVIDE() { return getTokens(NutriXnapParser.DIVIDE); }
		public TerminalNode DIVIDE(int i) {
			return getToken(NutriXnapParser.DIVIDE, i);
		}
		public List<TerminalNode> MULTIPLY() { return getTokens(NutriXnapParser.MULTIPLY); }
		public TerminalNode MULTIPLY(int i) {
			return getToken(NutriXnapParser.MULTIPLY, i);
		}
		public ArithTermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithTerm; }
	}

	public final ArithTermContext arithTerm() throws RecognitionException {
		ArithTermContext _localctx = new ArithTermContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_arithTerm);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			arithFactor();
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MULTIPLY || _la==DIVIDE) {
				{
				{
				setState(176);
				_la = _input.LA(1);
				if ( !(_la==MULTIPLY || _la==DIVIDE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(177);
				arithFactor();
				}
				}
				setState(182);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArithFactorContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(NutriXnapParser.Number, 0); }
		public TerminalNode LPAREN() { return getToken(NutriXnapParser.LPAREN, 0); }
		public ArithMeticExpressionContext arithMeticExpression() {
			return getRuleContext(ArithMeticExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(NutriXnapParser.RPAREN, 0); }
		public ArithFactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithFactor; }
	}

	public final ArithFactorContext arithFactor() throws RecognitionException {
		ArithFactorContext _localctx = new ArithFactorContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_arithFactor);
		try {
			setState(188);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Number:
				enterOuterAlt(_localctx, 1);
				{
				setState(183);
				match(Number);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(184);
				match(LPAREN);
				setState(185);
				arithMeticExpression();
				setState(186);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(NutriXnapParser.LPAREN, 0); }
		public List<KeyValueContext> keyValue() {
			return getRuleContexts(KeyValueContext.class);
		}
		public KeyValueContext keyValue(int i) {
			return getRuleContext(KeyValueContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(NutriXnapParser.RPAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(NutriXnapParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(NutriXnapParser.COMMA, i);
		}
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(LPAREN);
			setState(191);
			keyValue();
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(192);
				match(COMMA);
				setState(193);
				keyValue();
				}
				}
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(199);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KeyValueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(NutriXnapParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(NutriXnapParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public KeyValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyValue; }
	}

	public final KeyValueContext keyValue() throws RecognitionException {
		KeyValueContext _localctx = new KeyValueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_keyValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(ID);
			setState(202);
			match(ASSIGN);
			setState(203);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001&\u00ce\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0005\u0000(\b\u0000\n\u0000\f\u0000+\t\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u00014\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002;\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003B\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004I\b\u0004\n\u0004\f\u0004"+
		"L\t\u0004\u0003\u0004N\b\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0003\u0005U\b\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u0006`\b\u0006\n\u0006\f\u0006c\t\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0005\u0006n\b\u0006\n\u0006\f\u0006q\t\u0006\u0001"+
		"\u0006\u0001\u0006\u0005\u0006u\b\u0006\n\u0006\f\u0006x\t\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006\u007f"+
		"\b\u0006\n\u0006\f\u0006\u0082\t\u0006\u0001\u0006\u0003\u0006\u0085\b"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0004\b\u008f\b\b\u000b\b\f\b\u0090\u0003\b\u0093"+
		"\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0003\n\u009b\b\n"+
		"\u0001\n\u0001\n\u0001\n\u0003\n\u00a0\b\n\u0001\u000b\u0001\u000b\u0003"+
		"\u000b\u00a4\b\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0005\r\u00ab"+
		"\b\r\n\r\f\r\u00ae\t\r\u0001\u000e\u0001\u000e\u0001\u000e\u0005\u000e"+
		"\u00b3\b\u000e\n\u000e\f\u000e\u00b6\t\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00bd\b\u000f\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0005\u0010\u00c3\b\u0010\n\u0010\f\u0010"+
		"\u00c6\t\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0000\u0002\u0004\u0006\b\n"+
		"\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0000\u0003"+
		"\u0003\u0000\u0003\u0003  %%\u0001\u0000\u0013\u0014\u0001\u0000\u0016"+
		"\u0017\u00d4\u0000)\u0001\u0000\u0000\u0000\u00023\u0001\u0000\u0000\u0000"+
		"\u00045\u0001\u0000\u0000\u0000\u0006<\u0001\u0000\u0000\u0000\bC\u0001"+
		"\u0000\u0000\u0000\nQ\u0001\u0000\u0000\u0000\fV\u0001\u0000\u0000\u0000"+
		"\u000e\u0086\u0001\u0000\u0000\u0000\u0010\u0092\u0001\u0000\u0000\u0000"+
		"\u0012\u0094\u0001\u0000\u0000\u0000\u0014\u009a\u0001\u0000\u0000\u0000"+
		"\u0016\u00a3\u0001\u0000\u0000\u0000\u0018\u00a5\u0001\u0000\u0000\u0000"+
		"\u001a\u00a7\u0001\u0000\u0000\u0000\u001c\u00af\u0001\u0000\u0000\u0000"+
		"\u001e\u00bc\u0001\u0000\u0000\u0000 \u00be\u0001\u0000\u0000\u0000\""+
		"\u00c9\u0001\u0000\u0000\u0000$%\u0003\u0002\u0001\u0000%&\u0005\u0011"+
		"\u0000\u0000&(\u0001\u0000\u0000\u0000\'$\u0001\u0000\u0000\u0000(+\u0001"+
		"\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000\u0000"+
		"*,\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000,-\u0005\u0000\u0000"+
		"\u0001-\u0001\u0001\u0000\u0000\u0000.4\u0003\u0004\u0002\u0000/4\u0003"+
		"\u0006\u0003\u000004\u0003\b\u0004\u000014\u0003\n\u0005\u000024\u0003"+
		"\f\u0006\u00003.\u0001\u0000\u0000\u00003/\u0001\u0000\u0000\u000030\u0001"+
		"\u0000\u0000\u000031\u0001\u0000\u0000\u000032\u0001\u0000\u0000\u0000"+
		"4\u0003\u0001\u0000\u0000\u000056\u0005\u0004\u0000\u000067\u0005 \u0000"+
		"\u00007:\u0005\u0007\u0000\u00008;\u0003\u0016\u000b\u00009;\u0003\b\u0004"+
		"\u0000:8\u0001\u0000\u0000\u0000:9\u0001\u0000\u0000\u0000;\u0005\u0001"+
		"\u0000\u0000\u0000<=\u0005\u0005\u0000\u0000=>\u0005 \u0000\u0000>A\u0005"+
		"\u0007\u0000\u0000?B\u0003\u0016\u000b\u0000@B\u0003\b\u0004\u0000A?\u0001"+
		"\u0000\u0000\u0000A@\u0001\u0000\u0000\u0000B\u0007\u0001\u0000\u0000"+
		"\u0000CD\u0005 \u0000\u0000DM\u0005\f\u0000\u0000EJ\u0003\u0016\u000b"+
		"\u0000FG\u0005\u0012\u0000\u0000GI\u0003\u0016\u000b\u0000HF\u0001\u0000"+
		"\u0000\u0000IL\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000JK\u0001"+
		"\u0000\u0000\u0000KN\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000"+
		"ME\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000"+
		"\u0000OP\u0005\r\u0000\u0000P\t\u0001\u0000\u0000\u0000QT\u0005\u0006"+
		"\u0000\u0000RU\u0003\u0016\u000b\u0000SU\u0003\b\u0004\u0000TR\u0001\u0000"+
		"\u0000\u0000TS\u0001\u0000\u0000\u0000U\u000b\u0001\u0000\u0000\u0000"+
		"VW\u0005\b\u0000\u0000WX\u0005\f\u0000\u0000XY\u0003\u0010\b\u0000YZ\u0005"+
		"\r\u0000\u0000Z[\u0005\t\u0000\u0000[a\u0005\u000e\u0000\u0000\\]\u0003"+
		"\u0002\u0001\u0000]^\u0005\u0011\u0000\u0000^`\u0001\u0000\u0000\u0000"+
		"_\\\u0001\u0000\u0000\u0000`c\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000"+
		"\u0000ab\u0001\u0000\u0000\u0000bd\u0001\u0000\u0000\u0000ca\u0001\u0000"+
		"\u0000\u0000dv\u0005\u000f\u0000\u0000ef\u0005\n\u0000\u0000fg\u0005\f"+
		"\u0000\u0000gh\u0003\u0010\b\u0000hi\u0005\r\u0000\u0000io\u0005\u000e"+
		"\u0000\u0000jk\u0003\u0002\u0001\u0000kl\u0005\u0011\u0000\u0000ln\u0001"+
		"\u0000\u0000\u0000mj\u0001\u0000\u0000\u0000nq\u0001\u0000\u0000\u0000"+
		"om\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pr\u0001\u0000\u0000"+
		"\u0000qo\u0001\u0000\u0000\u0000rs\u0005\u000f\u0000\u0000su\u0001\u0000"+
		"\u0000\u0000te\u0001\u0000\u0000\u0000ux\u0001\u0000\u0000\u0000vt\u0001"+
		"\u0000\u0000\u0000vw\u0001\u0000\u0000\u0000w\u0084\u0001\u0000\u0000"+
		"\u0000xv\u0001\u0000\u0000\u0000yz\u0005\u000b\u0000\u0000z\u0080\u0005"+
		"\u000e\u0000\u0000{|\u0003\u0002\u0001\u0000|}\u0005\u0011\u0000\u0000"+
		"}\u007f\u0001\u0000\u0000\u0000~{\u0001\u0000\u0000\u0000\u007f\u0082"+
		"\u0001\u0000\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0080\u0081\u0001"+
		"\u0000\u0000\u0000\u0081\u0083\u0001\u0000\u0000\u0000\u0082\u0080\u0001"+
		"\u0000\u0000\u0000\u0083\u0085\u0005\u000f\u0000\u0000\u0084y\u0001\u0000"+
		"\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\r\u0001\u0000\u0000"+
		"\u0000\u0086\u0087\u0003\u0010\b\u0000\u0087\u0088\u0005\u0015\u0000\u0000"+
		"\u0088\u0089\u0003\u0016\u000b\u0000\u0089\u008a\u0005\u0010\u0000\u0000"+
		"\u008a\u008b\u0003\u0016\u000b\u0000\u008b\u000f\u0001\u0000\u0000\u0000"+
		"\u008c\u0093\u0003\u0012\t\u0000\u008d\u008f\u0003\u0014\n\u0000\u008e"+
		"\u008d\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000\u0000\u0000\u0090"+
		"\u008e\u0001\u0000\u0000\u0000\u0090\u0091\u0001\u0000\u0000\u0000\u0091"+
		"\u0093\u0001\u0000\u0000\u0000\u0092\u008c\u0001\u0000\u0000\u0000\u0092"+
		"\u008e\u0001\u0000\u0000\u0000\u0092\u0093\u0001\u0000\u0000\u0000\u0093"+
		"\u0011\u0001\u0000\u0000\u0000\u0094\u0095\u0003\u0016\u000b\u0000\u0095"+
		"\u0096\u0005\u0001\u0000\u0000\u0096\u0097\u0003\u0016\u000b\u0000\u0097"+
		"\u0013\u0001\u0000\u0000\u0000\u0098\u009b\u0003\u0016\u000b\u0000\u0099"+
		"\u009b\u0003\u0012\t\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009a\u0099"+
		"\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u009f"+
		"\u0005\u0002\u0000\u0000\u009d\u00a0\u0003\u0016\u000b\u0000\u009e\u00a0"+
		"\u0003\u0012\t\u0000\u009f\u009d\u0001\u0000\u0000\u0000\u009f\u009e\u0001"+
		"\u0000\u0000\u0000\u00a0\u0015\u0001\u0000\u0000\u0000\u00a1\u00a4\u0003"+
		"\u0018\f\u0000\u00a2\u00a4\u0003 \u0010\u0000\u00a3\u00a1\u0001\u0000"+
		"\u0000\u0000\u00a3\u00a2\u0001\u0000\u0000\u0000\u00a4\u0017\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a6\u0007\u0000\u0000\u0000\u00a6\u0019\u0001\u0000"+
		"\u0000\u0000\u00a7\u00ac\u0003\u001c\u000e\u0000\u00a8\u00a9\u0007\u0001"+
		"\u0000\u0000\u00a9\u00ab\u0003\u001c\u000e\u0000\u00aa\u00a8\u0001\u0000"+
		"\u0000\u0000\u00ab\u00ae\u0001\u0000\u0000\u0000\u00ac\u00aa\u0001\u0000"+
		"\u0000\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad\u001b\u0001\u0000"+
		"\u0000\u0000\u00ae\u00ac\u0001\u0000\u0000\u0000\u00af\u00b4\u0003\u001e"+
		"\u000f\u0000\u00b0\u00b1\u0007\u0002\u0000\u0000\u00b1\u00b3\u0003\u001e"+
		"\u000f\u0000\u00b2\u00b0\u0001\u0000\u0000\u0000\u00b3\u00b6\u0001\u0000"+
		"\u0000\u0000\u00b4\u00b2\u0001\u0000\u0000\u0000\u00b4\u00b5\u0001\u0000"+
		"\u0000\u0000\u00b5\u001d\u0001\u0000\u0000\u0000\u00b6\u00b4\u0001\u0000"+
		"\u0000\u0000\u00b7\u00bd\u0005\u0003\u0000\u0000\u00b8\u00b9\u0005\f\u0000"+
		"\u0000\u00b9\u00ba\u0003\u001a\r\u0000\u00ba\u00bb\u0005\r\u0000\u0000"+
		"\u00bb\u00bd\u0001\u0000\u0000\u0000\u00bc\u00b7\u0001\u0000\u0000\u0000"+
		"\u00bc\u00b8\u0001\u0000\u0000\u0000\u00bd\u001f\u0001\u0000\u0000\u0000"+
		"\u00be\u00bf\u0005\f\u0000\u0000\u00bf\u00c4\u0003\"\u0011\u0000\u00c0"+
		"\u00c1\u0005\u0012\u0000\u0000\u00c1\u00c3\u0003\"\u0011\u0000\u00c2\u00c0"+
		"\u0001\u0000\u0000\u0000\u00c3\u00c6\u0001\u0000\u0000\u0000\u00c4\u00c2"+
		"\u0001\u0000\u0000\u0000\u00c4\u00c5\u0001\u0000\u0000\u0000\u00c5\u00c7"+
		"\u0001\u0000\u0000\u0000\u00c6\u00c4\u0001\u0000\u0000\u0000\u00c7\u00c8"+
		"\u0005\r\u0000\u0000\u00c8!\u0001\u0000\u0000\u0000\u00c9\u00ca\u0005"+
		" \u0000\u0000\u00ca\u00cb\u0005\u0007\u0000\u0000\u00cb\u00cc\u0003\u0018"+
		"\f\u0000\u00cc#\u0001\u0000\u0000\u0000\u0015)3:AJMTaov\u0080\u0084\u0090"+
		"\u0092\u009a\u009f\u00a3\u00ac\u00b4\u00bc\u00c4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}