// Generated from src/grammar/MySqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MySqlParser.

function MySqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MySqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MySqlParserVisitor.prototype.constructor = MySqlParserVisitor;

// Visit a parse tree produced by MySqlParser#root.
MySqlParserVisitor.prototype.visitRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#sqlStatements.
MySqlParserVisitor.prototype.visitSqlStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#sqlStatement.
MySqlParserVisitor.prototype.visitSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#emptyStatement.
MySqlParserVisitor.prototype.visitEmptyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#ddlStatement.
MySqlParserVisitor.prototype.visitDdlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dmlStatement.
MySqlParserVisitor.prototype.visitDmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#transactionStatement.
MySqlParserVisitor.prototype.visitTransactionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#replicationStatement.
MySqlParserVisitor.prototype.visitReplicationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#preparedStatement.
MySqlParserVisitor.prototype.visitPreparedStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#compoundStatement.
MySqlParserVisitor.prototype.visitCompoundStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#administrationStatement.
MySqlParserVisitor.prototype.visitAdministrationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#utilityStatement.
MySqlParserVisitor.prototype.visitUtilityStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createDatabase.
MySqlParserVisitor.prototype.visitCreateDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createEvent.
MySqlParserVisitor.prototype.visitCreateEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createIndex.
MySqlParserVisitor.prototype.visitCreateIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createLogfileGroup.
MySqlParserVisitor.prototype.visitCreateLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createProcedure.
MySqlParserVisitor.prototype.visitCreateProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createFunction.
MySqlParserVisitor.prototype.visitCreateFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createServer.
MySqlParserVisitor.prototype.visitCreateServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#copyCreateTable.
MySqlParserVisitor.prototype.visitCopyCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#queryCreateTable.
MySqlParserVisitor.prototype.visitQueryCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#columnCreateTable.
MySqlParserVisitor.prototype.visitColumnCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createTablespaceInnodb.
MySqlParserVisitor.prototype.visitCreateTablespaceInnodb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createTablespaceNdb.
MySqlParserVisitor.prototype.visitCreateTablespaceNdb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createTrigger.
MySqlParserVisitor.prototype.visitCreateTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createView.
MySqlParserVisitor.prototype.visitCreateView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createDatabaseOption.
MySqlParserVisitor.prototype.visitCreateDatabaseOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#ownerStatement.
MySqlParserVisitor.prototype.visitOwnerStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#preciseSchedule.
MySqlParserVisitor.prototype.visitPreciseSchedule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#intervalSchedule.
MySqlParserVisitor.prototype.visitIntervalSchedule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#timestampValue.
MySqlParserVisitor.prototype.visitTimestampValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#intervalExpr.
MySqlParserVisitor.prototype.visitIntervalExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#intervalType.
MySqlParserVisitor.prototype.visitIntervalType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#enableType.
MySqlParserVisitor.prototype.visitEnableType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#indexType.
MySqlParserVisitor.prototype.visitIndexType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#indexOption.
MySqlParserVisitor.prototype.visitIndexOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#procedureParameter.
MySqlParserVisitor.prototype.visitProcedureParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#functionParameter.
MySqlParserVisitor.prototype.visitFunctionParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#routineComment.
MySqlParserVisitor.prototype.visitRoutineComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#routineLanguage.
MySqlParserVisitor.prototype.visitRoutineLanguage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#routineBehavior.
MySqlParserVisitor.prototype.visitRoutineBehavior = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#routineData.
MySqlParserVisitor.prototype.visitRoutineData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#routineSecurity.
MySqlParserVisitor.prototype.visitRoutineSecurity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#serverOption.
MySqlParserVisitor.prototype.visitServerOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createDefinitions.
MySqlParserVisitor.prototype.visitCreateDefinitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#columnDeclaration.
MySqlParserVisitor.prototype.visitColumnDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#constraintDeclaration.
MySqlParserVisitor.prototype.visitConstraintDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#indexDeclaration.
MySqlParserVisitor.prototype.visitIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#columnDefinition.
MySqlParserVisitor.prototype.visitColumnDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#nullColumnConstraint.
MySqlParserVisitor.prototype.visitNullColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#defaultColumnConstraint.
MySqlParserVisitor.prototype.visitDefaultColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#autoIncrementColumnConstraint.
MySqlParserVisitor.prototype.visitAutoIncrementColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#primaryKeyColumnConstraint.
MySqlParserVisitor.prototype.visitPrimaryKeyColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#uniqueKeyColumnConstraint.
MySqlParserVisitor.prototype.visitUniqueKeyColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#commentColumnConstraint.
MySqlParserVisitor.prototype.visitCommentColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#formatColumnConstraint.
MySqlParserVisitor.prototype.visitFormatColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#storageColumnConstraint.
MySqlParserVisitor.prototype.visitStorageColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#referenceColumnConstraint.
MySqlParserVisitor.prototype.visitReferenceColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#collateColumnConstraint.
MySqlParserVisitor.prototype.visitCollateColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#generatedColumnConstraint.
MySqlParserVisitor.prototype.visitGeneratedColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#serialDefaultColumnConstraint.
MySqlParserVisitor.prototype.visitSerialDefaultColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#checkColumnConstraint.
MySqlParserVisitor.prototype.visitCheckColumnConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#primaryKeyTableConstraint.
MySqlParserVisitor.prototype.visitPrimaryKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#uniqueKeyTableConstraint.
MySqlParserVisitor.prototype.visitUniqueKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#foreignKeyTableConstraint.
MySqlParserVisitor.prototype.visitForeignKeyTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#checkTableConstraint.
MySqlParserVisitor.prototype.visitCheckTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#referenceDefinition.
MySqlParserVisitor.prototype.visitReferenceDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#referenceAction.
MySqlParserVisitor.prototype.visitReferenceAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#referenceControlType.
MySqlParserVisitor.prototype.visitReferenceControlType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleIndexDeclaration.
MySqlParserVisitor.prototype.visitSimpleIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#specialIndexDeclaration.
MySqlParserVisitor.prototype.visitSpecialIndexDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionEngine.
MySqlParserVisitor.prototype.visitTableOptionEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionAutoIncrement.
MySqlParserVisitor.prototype.visitTableOptionAutoIncrement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionAverage.
MySqlParserVisitor.prototype.visitTableOptionAverage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionCharset.
MySqlParserVisitor.prototype.visitTableOptionCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionChecksum.
MySqlParserVisitor.prototype.visitTableOptionChecksum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionCollate.
MySqlParserVisitor.prototype.visitTableOptionCollate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionComment.
MySqlParserVisitor.prototype.visitTableOptionComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionCompression.
MySqlParserVisitor.prototype.visitTableOptionCompression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionConnection.
MySqlParserVisitor.prototype.visitTableOptionConnection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionDataDirectory.
MySqlParserVisitor.prototype.visitTableOptionDataDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionDelay.
MySqlParserVisitor.prototype.visitTableOptionDelay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionEncryption.
MySqlParserVisitor.prototype.visitTableOptionEncryption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionIndexDirectory.
MySqlParserVisitor.prototype.visitTableOptionIndexDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionInsertMethod.
MySqlParserVisitor.prototype.visitTableOptionInsertMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionKeyBlockSize.
MySqlParserVisitor.prototype.visitTableOptionKeyBlockSize = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionMaxRows.
MySqlParserVisitor.prototype.visitTableOptionMaxRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionMinRows.
MySqlParserVisitor.prototype.visitTableOptionMinRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionPackKeys.
MySqlParserVisitor.prototype.visitTableOptionPackKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionPassword.
MySqlParserVisitor.prototype.visitTableOptionPassword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionRowFormat.
MySqlParserVisitor.prototype.visitTableOptionRowFormat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionRecalculation.
MySqlParserVisitor.prototype.visitTableOptionRecalculation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionPersistent.
MySqlParserVisitor.prototype.visitTableOptionPersistent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionSamplePage.
MySqlParserVisitor.prototype.visitTableOptionSamplePage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionTablespace.
MySqlParserVisitor.prototype.visitTableOptionTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableOptionUnion.
MySqlParserVisitor.prototype.visitTableOptionUnion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tablespaceStorage.
MySqlParserVisitor.prototype.visitTablespaceStorage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionDefinitions.
MySqlParserVisitor.prototype.visitPartitionDefinitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionFunctionHash.
MySqlParserVisitor.prototype.visitPartitionFunctionHash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionFunctionKey.
MySqlParserVisitor.prototype.visitPartitionFunctionKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionFunctionRange.
MySqlParserVisitor.prototype.visitPartitionFunctionRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionFunctionList.
MySqlParserVisitor.prototype.visitPartitionFunctionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#subPartitionFunctionHash.
MySqlParserVisitor.prototype.visitSubPartitionFunctionHash = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#subPartitionFunctionKey.
MySqlParserVisitor.prototype.visitSubPartitionFunctionKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionComparision.
MySqlParserVisitor.prototype.visitPartitionComparision = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionListAtom.
MySqlParserVisitor.prototype.visitPartitionListAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionListVector.
MySqlParserVisitor.prototype.visitPartitionListVector = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionSimple.
MySqlParserVisitor.prototype.visitPartitionSimple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionDefinerAtom.
MySqlParserVisitor.prototype.visitPartitionDefinerAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionDefinerVector.
MySqlParserVisitor.prototype.visitPartitionDefinerVector = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#subpartitionDefinition.
MySqlParserVisitor.prototype.visitSubpartitionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionOptionEngine.
MySqlParserVisitor.prototype.visitPartitionOptionEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionOptionComment.
MySqlParserVisitor.prototype.visitPartitionOptionComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionOptionDataDirectory.
MySqlParserVisitor.prototype.visitPartitionOptionDataDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionOptionIndexDirectory.
MySqlParserVisitor.prototype.visitPartitionOptionIndexDirectory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionOptionMaxRows.
MySqlParserVisitor.prototype.visitPartitionOptionMaxRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionOptionMinRows.
MySqlParserVisitor.prototype.visitPartitionOptionMinRows = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionOptionTablespace.
MySqlParserVisitor.prototype.visitPartitionOptionTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#partitionOptionNodeGroup.
MySqlParserVisitor.prototype.visitPartitionOptionNodeGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterSimpleDatabase.
MySqlParserVisitor.prototype.visitAlterSimpleDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterUpgradeName.
MySqlParserVisitor.prototype.visitAlterUpgradeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterEvent.
MySqlParserVisitor.prototype.visitAlterEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterFunction.
MySqlParserVisitor.prototype.visitAlterFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterInstance.
MySqlParserVisitor.prototype.visitAlterInstance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterLogfileGroup.
MySqlParserVisitor.prototype.visitAlterLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterProcedure.
MySqlParserVisitor.prototype.visitAlterProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterServer.
MySqlParserVisitor.prototype.visitAlterServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterTable.
MySqlParserVisitor.prototype.visitAlterTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterTablespace.
MySqlParserVisitor.prototype.visitAlterTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterView.
MySqlParserVisitor.prototype.visitAlterView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByTableOption.
MySqlParserVisitor.prototype.visitAlterByTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddColumn.
MySqlParserVisitor.prototype.visitAlterByAddColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddColumns.
MySqlParserVisitor.prototype.visitAlterByAddColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddIndex.
MySqlParserVisitor.prototype.visitAlterByAddIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddPrimaryKey.
MySqlParserVisitor.prototype.visitAlterByAddPrimaryKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddUniqueKey.
MySqlParserVisitor.prototype.visitAlterByAddUniqueKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddSpecialIndex.
MySqlParserVisitor.prototype.visitAlterByAddSpecialIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddForeignKey.
MySqlParserVisitor.prototype.visitAlterByAddForeignKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddCheckTableConstraint.
MySqlParserVisitor.prototype.visitAlterByAddCheckTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterBySetAlgorithm.
MySqlParserVisitor.prototype.visitAlterBySetAlgorithm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByChangeDefault.
MySqlParserVisitor.prototype.visitAlterByChangeDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByChangeColumn.
MySqlParserVisitor.prototype.visitAlterByChangeColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByRenameColumn.
MySqlParserVisitor.prototype.visitAlterByRenameColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByLock.
MySqlParserVisitor.prototype.visitAlterByLock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByModifyColumn.
MySqlParserVisitor.prototype.visitAlterByModifyColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDropColumn.
MySqlParserVisitor.prototype.visitAlterByDropColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDropPrimaryKey.
MySqlParserVisitor.prototype.visitAlterByDropPrimaryKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByRenameIndex.
MySqlParserVisitor.prototype.visitAlterByRenameIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAlterIndexVisibility.
MySqlParserVisitor.prototype.visitAlterByAlterIndexVisibility = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDropIndex.
MySqlParserVisitor.prototype.visitAlterByDropIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDropForeignKey.
MySqlParserVisitor.prototype.visitAlterByDropForeignKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDisableKeys.
MySqlParserVisitor.prototype.visitAlterByDisableKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByEnableKeys.
MySqlParserVisitor.prototype.visitAlterByEnableKeys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByRename.
MySqlParserVisitor.prototype.visitAlterByRename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByOrder.
MySqlParserVisitor.prototype.visitAlterByOrder = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByConvertCharset.
MySqlParserVisitor.prototype.visitAlterByConvertCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDefaultCharset.
MySqlParserVisitor.prototype.visitAlterByDefaultCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDiscardTablespace.
MySqlParserVisitor.prototype.visitAlterByDiscardTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByImportTablespace.
MySqlParserVisitor.prototype.visitAlterByImportTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByForce.
MySqlParserVisitor.prototype.visitAlterByForce = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByValidate.
MySqlParserVisitor.prototype.visitAlterByValidate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAddPartition.
MySqlParserVisitor.prototype.visitAlterByAddPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDropPartition.
MySqlParserVisitor.prototype.visitAlterByDropPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByDiscardPartition.
MySqlParserVisitor.prototype.visitAlterByDiscardPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByImportPartition.
MySqlParserVisitor.prototype.visitAlterByImportPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByTruncatePartition.
MySqlParserVisitor.prototype.visitAlterByTruncatePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByCoalescePartition.
MySqlParserVisitor.prototype.visitAlterByCoalescePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByReorganizePartition.
MySqlParserVisitor.prototype.visitAlterByReorganizePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByExchangePartition.
MySqlParserVisitor.prototype.visitAlterByExchangePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByAnalyzePartition.
MySqlParserVisitor.prototype.visitAlterByAnalyzePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByCheckPartition.
MySqlParserVisitor.prototype.visitAlterByCheckPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByOptimizePartition.
MySqlParserVisitor.prototype.visitAlterByOptimizePartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByRebuildPartition.
MySqlParserVisitor.prototype.visitAlterByRebuildPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByRepairPartition.
MySqlParserVisitor.prototype.visitAlterByRepairPartition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByRemovePartitioning.
MySqlParserVisitor.prototype.visitAlterByRemovePartitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterByUpgradePartitioning.
MySqlParserVisitor.prototype.visitAlterByUpgradePartitioning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropDatabase.
MySqlParserVisitor.prototype.visitDropDatabase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropEvent.
MySqlParserVisitor.prototype.visitDropEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropIndex.
MySqlParserVisitor.prototype.visitDropIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropLogfileGroup.
MySqlParserVisitor.prototype.visitDropLogfileGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropProcedure.
MySqlParserVisitor.prototype.visitDropProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropFunction.
MySqlParserVisitor.prototype.visitDropFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropServer.
MySqlParserVisitor.prototype.visitDropServer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropTable.
MySqlParserVisitor.prototype.visitDropTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropTablespace.
MySqlParserVisitor.prototype.visitDropTablespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropTrigger.
MySqlParserVisitor.prototype.visitDropTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropView.
MySqlParserVisitor.prototype.visitDropView = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#renameTable.
MySqlParserVisitor.prototype.visitRenameTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#renameTableClause.
MySqlParserVisitor.prototype.visitRenameTableClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#truncateTable.
MySqlParserVisitor.prototype.visitTruncateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#callStatement.
MySqlParserVisitor.prototype.visitCallStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#deleteStatement.
MySqlParserVisitor.prototype.visitDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#doStatement.
MySqlParserVisitor.prototype.visitDoStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerStatement.
MySqlParserVisitor.prototype.visitHandlerStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#insertStatement.
MySqlParserVisitor.prototype.visitInsertStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#loadDataStatement.
MySqlParserVisitor.prototype.visitLoadDataStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#loadXmlStatement.
MySqlParserVisitor.prototype.visitLoadXmlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#replaceStatement.
MySqlParserVisitor.prototype.visitReplaceStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleSelect.
MySqlParserVisitor.prototype.visitSimpleSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#parenthesisSelect.
MySqlParserVisitor.prototype.visitParenthesisSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#unionSelect.
MySqlParserVisitor.prototype.visitUnionSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#unionParenthesisSelect.
MySqlParserVisitor.prototype.visitUnionParenthesisSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#updateStatement.
MySqlParserVisitor.prototype.visitUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#insertStatementValue.
MySqlParserVisitor.prototype.visitInsertStatementValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#updatedElement.
MySqlParserVisitor.prototype.visitUpdatedElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#assignmentField.
MySqlParserVisitor.prototype.visitAssignmentField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#lockClause.
MySqlParserVisitor.prototype.visitLockClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#singleDeleteStatement.
MySqlParserVisitor.prototype.visitSingleDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#multipleDeleteStatement.
MySqlParserVisitor.prototype.visitMultipleDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerOpenStatement.
MySqlParserVisitor.prototype.visitHandlerOpenStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerReadIndexStatement.
MySqlParserVisitor.prototype.visitHandlerReadIndexStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerReadStatement.
MySqlParserVisitor.prototype.visitHandlerReadStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerCloseStatement.
MySqlParserVisitor.prototype.visitHandlerCloseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#singleUpdateStatement.
MySqlParserVisitor.prototype.visitSingleUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#multipleUpdateStatement.
MySqlParserVisitor.prototype.visitMultipleUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#orderByClause.
MySqlParserVisitor.prototype.visitOrderByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#orderByExpression.
MySqlParserVisitor.prototype.visitOrderByExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableSources.
MySqlParserVisitor.prototype.visitTableSources = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableSourceBase.
MySqlParserVisitor.prototype.visitTableSourceBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableSourceNested.
MySqlParserVisitor.prototype.visitTableSourceNested = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#atomTableItem.
MySqlParserVisitor.prototype.visitAtomTableItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#subqueryTableItem.
MySqlParserVisitor.prototype.visitSubqueryTableItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableSourcesItem.
MySqlParserVisitor.prototype.visitTableSourcesItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#indexHint.
MySqlParserVisitor.prototype.visitIndexHint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#indexHintType.
MySqlParserVisitor.prototype.visitIndexHintType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#innerJoin.
MySqlParserVisitor.prototype.visitInnerJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#straightJoin.
MySqlParserVisitor.prototype.visitStraightJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#outerJoin.
MySqlParserVisitor.prototype.visitOuterJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#naturalJoin.
MySqlParserVisitor.prototype.visitNaturalJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#queryExpression.
MySqlParserVisitor.prototype.visitQueryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#queryExpressionNointo.
MySqlParserVisitor.prototype.visitQueryExpressionNointo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#querySpecification.
MySqlParserVisitor.prototype.visitQuerySpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#querySpecificationNointo.
MySqlParserVisitor.prototype.visitQuerySpecificationNointo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#unionParenthesis.
MySqlParserVisitor.prototype.visitUnionParenthesis = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#unionStatement.
MySqlParserVisitor.prototype.visitUnionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectSpec.
MySqlParserVisitor.prototype.visitSelectSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectElements.
MySqlParserVisitor.prototype.visitSelectElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectStarElement.
MySqlParserVisitor.prototype.visitSelectStarElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectColumnElement.
MySqlParserVisitor.prototype.visitSelectColumnElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectFunctionElement.
MySqlParserVisitor.prototype.visitSelectFunctionElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectExpressionElement.
MySqlParserVisitor.prototype.visitSelectExpressionElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectIntoVariables.
MySqlParserVisitor.prototype.visitSelectIntoVariables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectIntoDumpFile.
MySqlParserVisitor.prototype.visitSelectIntoDumpFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectIntoTextFile.
MySqlParserVisitor.prototype.visitSelectIntoTextFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectFieldsInto.
MySqlParserVisitor.prototype.visitSelectFieldsInto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#selectLinesInto.
MySqlParserVisitor.prototype.visitSelectLinesInto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#fromClause.
MySqlParserVisitor.prototype.visitFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#groupByItem.
MySqlParserVisitor.prototype.visitGroupByItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#limitClause.
MySqlParserVisitor.prototype.visitLimitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#limitClauseAtom.
MySqlParserVisitor.prototype.visitLimitClauseAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#startTransaction.
MySqlParserVisitor.prototype.visitStartTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#beginWork.
MySqlParserVisitor.prototype.visitBeginWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#commitWork.
MySqlParserVisitor.prototype.visitCommitWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#rollbackWork.
MySqlParserVisitor.prototype.visitRollbackWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#savepointStatement.
MySqlParserVisitor.prototype.visitSavepointStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#rollbackStatement.
MySqlParserVisitor.prototype.visitRollbackStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#releaseStatement.
MySqlParserVisitor.prototype.visitReleaseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#lockTables.
MySqlParserVisitor.prototype.visitLockTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#unlockTables.
MySqlParserVisitor.prototype.visitUnlockTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setAutocommitStatement.
MySqlParserVisitor.prototype.visitSetAutocommitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setTransactionStatement.
MySqlParserVisitor.prototype.visitSetTransactionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#transactionMode.
MySqlParserVisitor.prototype.visitTransactionMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#lockTableElement.
MySqlParserVisitor.prototype.visitLockTableElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#lockAction.
MySqlParserVisitor.prototype.visitLockAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#transactionOption.
MySqlParserVisitor.prototype.visitTransactionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#transactionLevel.
MySqlParserVisitor.prototype.visitTransactionLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#changeMaster.
MySqlParserVisitor.prototype.visitChangeMaster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#changeReplicationFilter.
MySqlParserVisitor.prototype.visitChangeReplicationFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#purgeBinaryLogs.
MySqlParserVisitor.prototype.visitPurgeBinaryLogs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#resetMaster.
MySqlParserVisitor.prototype.visitResetMaster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#resetSlave.
MySqlParserVisitor.prototype.visitResetSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#startSlave.
MySqlParserVisitor.prototype.visitStartSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#stopSlave.
MySqlParserVisitor.prototype.visitStopSlave = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#startGroupReplication.
MySqlParserVisitor.prototype.visitStartGroupReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#stopGroupReplication.
MySqlParserVisitor.prototype.visitStopGroupReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#masterStringOption.
MySqlParserVisitor.prototype.visitMasterStringOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#masterDecimalOption.
MySqlParserVisitor.prototype.visitMasterDecimalOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#masterBoolOption.
MySqlParserVisitor.prototype.visitMasterBoolOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#masterRealOption.
MySqlParserVisitor.prototype.visitMasterRealOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#masterUidListOption.
MySqlParserVisitor.prototype.visitMasterUidListOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#stringMasterOption.
MySqlParserVisitor.prototype.visitStringMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#decimalMasterOption.
MySqlParserVisitor.prototype.visitDecimalMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#boolMasterOption.
MySqlParserVisitor.prototype.visitBoolMasterOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#channelOption.
MySqlParserVisitor.prototype.visitChannelOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#doDbReplication.
MySqlParserVisitor.prototype.visitDoDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#ignoreDbReplication.
MySqlParserVisitor.prototype.visitIgnoreDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#doTableReplication.
MySqlParserVisitor.prototype.visitDoTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#ignoreTableReplication.
MySqlParserVisitor.prototype.visitIgnoreTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#wildDoTableReplication.
MySqlParserVisitor.prototype.visitWildDoTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#wildIgnoreTableReplication.
MySqlParserVisitor.prototype.visitWildIgnoreTableReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#rewriteDbReplication.
MySqlParserVisitor.prototype.visitRewriteDbReplication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tablePair.
MySqlParserVisitor.prototype.visitTablePair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#threadType.
MySqlParserVisitor.prototype.visitThreadType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#gtidsUntilOption.
MySqlParserVisitor.prototype.visitGtidsUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#masterLogUntilOption.
MySqlParserVisitor.prototype.visitMasterLogUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#relayLogUntilOption.
MySqlParserVisitor.prototype.visitRelayLogUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#sqlGapsUntilOption.
MySqlParserVisitor.prototype.visitSqlGapsUntilOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#userConnectionOption.
MySqlParserVisitor.prototype.visitUserConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#passwordConnectionOption.
MySqlParserVisitor.prototype.visitPasswordConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#defaultAuthConnectionOption.
MySqlParserVisitor.prototype.visitDefaultAuthConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#pluginDirConnectionOption.
MySqlParserVisitor.prototype.visitPluginDirConnectionOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#gtuidSet.
MySqlParserVisitor.prototype.visitGtuidSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#xaStartTransaction.
MySqlParserVisitor.prototype.visitXaStartTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#xaEndTransaction.
MySqlParserVisitor.prototype.visitXaEndTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#xaPrepareStatement.
MySqlParserVisitor.prototype.visitXaPrepareStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#xaCommitWork.
MySqlParserVisitor.prototype.visitXaCommitWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#xaRollbackWork.
MySqlParserVisitor.prototype.visitXaRollbackWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#xaRecoverWork.
MySqlParserVisitor.prototype.visitXaRecoverWork = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#prepareStatement.
MySqlParserVisitor.prototype.visitPrepareStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#executeStatement.
MySqlParserVisitor.prototype.visitExecuteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#deallocatePrepare.
MySqlParserVisitor.prototype.visitDeallocatePrepare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#routineBody.
MySqlParserVisitor.prototype.visitRoutineBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#blockStatement.
MySqlParserVisitor.prototype.visitBlockStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#caseStatement.
MySqlParserVisitor.prototype.visitCaseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#ifStatement.
MySqlParserVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#iterateStatement.
MySqlParserVisitor.prototype.visitIterateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#leaveStatement.
MySqlParserVisitor.prototype.visitLeaveStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#loopStatement.
MySqlParserVisitor.prototype.visitLoopStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#repeatStatement.
MySqlParserVisitor.prototype.visitRepeatStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#returnStatement.
MySqlParserVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#whileStatement.
MySqlParserVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#CloseCursor.
MySqlParserVisitor.prototype.visitCloseCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#FetchCursor.
MySqlParserVisitor.prototype.visitFetchCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#OpenCursor.
MySqlParserVisitor.prototype.visitOpenCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#declareVariable.
MySqlParserVisitor.prototype.visitDeclareVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#declareCondition.
MySqlParserVisitor.prototype.visitDeclareCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#declareCursor.
MySqlParserVisitor.prototype.visitDeclareCursor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#declareHandler.
MySqlParserVisitor.prototype.visitDeclareHandler = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerConditionCode.
MySqlParserVisitor.prototype.visitHandlerConditionCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerConditionState.
MySqlParserVisitor.prototype.visitHandlerConditionState = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerConditionName.
MySqlParserVisitor.prototype.visitHandlerConditionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerConditionWarning.
MySqlParserVisitor.prototype.visitHandlerConditionWarning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerConditionNotfound.
MySqlParserVisitor.prototype.visitHandlerConditionNotfound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#handlerConditionException.
MySqlParserVisitor.prototype.visitHandlerConditionException = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#procedureSqlStatement.
MySqlParserVisitor.prototype.visitProcedureSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#caseAlternative.
MySqlParserVisitor.prototype.visitCaseAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#elifAlternative.
MySqlParserVisitor.prototype.visitElifAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterUserMysqlV56.
MySqlParserVisitor.prototype.visitAlterUserMysqlV56 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#alterUserMysqlV57.
MySqlParserVisitor.prototype.visitAlterUserMysqlV57 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createUserMysqlV56.
MySqlParserVisitor.prototype.visitCreateUserMysqlV56 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createUserMysqlV57.
MySqlParserVisitor.prototype.visitCreateUserMysqlV57 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dropUser.
MySqlParserVisitor.prototype.visitDropUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#grantStatement.
MySqlParserVisitor.prototype.visitGrantStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#grantProxy.
MySqlParserVisitor.prototype.visitGrantProxy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#renameUser.
MySqlParserVisitor.prototype.visitRenameUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#detailRevoke.
MySqlParserVisitor.prototype.visitDetailRevoke = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#shortRevoke.
MySqlParserVisitor.prototype.visitShortRevoke = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#revokeProxy.
MySqlParserVisitor.prototype.visitRevokeProxy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setPasswordStatement.
MySqlParserVisitor.prototype.visitSetPasswordStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#userSpecification.
MySqlParserVisitor.prototype.visitUserSpecification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#passwordAuthOption.
MySqlParserVisitor.prototype.visitPasswordAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#stringAuthOption.
MySqlParserVisitor.prototype.visitStringAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#hashAuthOption.
MySqlParserVisitor.prototype.visitHashAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleAuthOption.
MySqlParserVisitor.prototype.visitSimpleAuthOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tlsOption.
MySqlParserVisitor.prototype.visitTlsOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#userResourceOption.
MySqlParserVisitor.prototype.visitUserResourceOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#userPasswordOption.
MySqlParserVisitor.prototype.visitUserPasswordOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#userLockOption.
MySqlParserVisitor.prototype.visitUserLockOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#privelegeClause.
MySqlParserVisitor.prototype.visitPrivelegeClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#privilege.
MySqlParserVisitor.prototype.visitPrivilege = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#currentSchemaPriviLevel.
MySqlParserVisitor.prototype.visitCurrentSchemaPriviLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#globalPrivLevel.
MySqlParserVisitor.prototype.visitGlobalPrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#definiteSchemaPrivLevel.
MySqlParserVisitor.prototype.visitDefiniteSchemaPrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#definiteFullTablePrivLevel.
MySqlParserVisitor.prototype.visitDefiniteFullTablePrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#definiteFullTablePrivLevel2.
MySqlParserVisitor.prototype.visitDefiniteFullTablePrivLevel2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#definiteTablePrivLevel.
MySqlParserVisitor.prototype.visitDefiniteTablePrivLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#renameUserClause.
MySqlParserVisitor.prototype.visitRenameUserClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#analyzeTable.
MySqlParserVisitor.prototype.visitAnalyzeTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#checkTable.
MySqlParserVisitor.prototype.visitCheckTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#checksumTable.
MySqlParserVisitor.prototype.visitChecksumTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#optimizeTable.
MySqlParserVisitor.prototype.visitOptimizeTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#repairTable.
MySqlParserVisitor.prototype.visitRepairTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#checkTableOption.
MySqlParserVisitor.prototype.visitCheckTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#createUdfunction.
MySqlParserVisitor.prototype.visitCreateUdfunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#installPlugin.
MySqlParserVisitor.prototype.visitInstallPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#uninstallPlugin.
MySqlParserVisitor.prototype.visitUninstallPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setVariable.
MySqlParserVisitor.prototype.visitSetVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setCharset.
MySqlParserVisitor.prototype.visitSetCharset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setNames.
MySqlParserVisitor.prototype.visitSetNames = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setPassword.
MySqlParserVisitor.prototype.visitSetPassword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setTransaction.
MySqlParserVisitor.prototype.visitSetTransaction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setAutocommit.
MySqlParserVisitor.prototype.visitSetAutocommit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#setNewValueInsideTrigger.
MySqlParserVisitor.prototype.visitSetNewValueInsideTrigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showMasterLogs.
MySqlParserVisitor.prototype.visitShowMasterLogs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showLogEvents.
MySqlParserVisitor.prototype.visitShowLogEvents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showObjectFilter.
MySqlParserVisitor.prototype.visitShowObjectFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showColumns.
MySqlParserVisitor.prototype.visitShowColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showCreateDb.
MySqlParserVisitor.prototype.visitShowCreateDb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showCreateFullIdObject.
MySqlParserVisitor.prototype.visitShowCreateFullIdObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showCreateUser.
MySqlParserVisitor.prototype.visitShowCreateUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showEngine.
MySqlParserVisitor.prototype.visitShowEngine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showGlobalInfo.
MySqlParserVisitor.prototype.visitShowGlobalInfo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showErrors.
MySqlParserVisitor.prototype.visitShowErrors = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showCountErrors.
MySqlParserVisitor.prototype.visitShowCountErrors = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showSchemaFilter.
MySqlParserVisitor.prototype.visitShowSchemaFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showRoutine.
MySqlParserVisitor.prototype.visitShowRoutine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showGrants.
MySqlParserVisitor.prototype.visitShowGrants = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showIndexes.
MySqlParserVisitor.prototype.visitShowIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showOpenTables.
MySqlParserVisitor.prototype.visitShowOpenTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showProfile.
MySqlParserVisitor.prototype.visitShowProfile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showSlaveStatus.
MySqlParserVisitor.prototype.visitShowSlaveStatus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#variableClause.
MySqlParserVisitor.prototype.visitVariableClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showCommonEntity.
MySqlParserVisitor.prototype.visitShowCommonEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showFilter.
MySqlParserVisitor.prototype.visitShowFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showGlobalInfoClause.
MySqlParserVisitor.prototype.visitShowGlobalInfoClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showSchemaEntity.
MySqlParserVisitor.prototype.visitShowSchemaEntity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#showProfileType.
MySqlParserVisitor.prototype.visitShowProfileType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#binlogStatement.
MySqlParserVisitor.prototype.visitBinlogStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#cacheIndexStatement.
MySqlParserVisitor.prototype.visitCacheIndexStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#flushStatement.
MySqlParserVisitor.prototype.visitFlushStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#killStatement.
MySqlParserVisitor.prototype.visitKillStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#loadIndexIntoCache.
MySqlParserVisitor.prototype.visitLoadIndexIntoCache = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#resetStatement.
MySqlParserVisitor.prototype.visitResetStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#shutdownStatement.
MySqlParserVisitor.prototype.visitShutdownStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableIndexes.
MySqlParserVisitor.prototype.visitTableIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleFlushOption.
MySqlParserVisitor.prototype.visitSimpleFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#channelFlushOption.
MySqlParserVisitor.prototype.visitChannelFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableFlushOption.
MySqlParserVisitor.prototype.visitTableFlushOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#flushTableOption.
MySqlParserVisitor.prototype.visitFlushTableOption = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#loadedTableIndexes.
MySqlParserVisitor.prototype.visitLoadedTableIndexes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleDescribeStatement.
MySqlParserVisitor.prototype.visitSimpleDescribeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#fullDescribeStatement.
MySqlParserVisitor.prototype.visitFullDescribeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#helpStatement.
MySqlParserVisitor.prototype.visitHelpStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#useStatement.
MySqlParserVisitor.prototype.visitUseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#signalStatement.
MySqlParserVisitor.prototype.visitSignalStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#resignalStatement.
MySqlParserVisitor.prototype.visitResignalStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#signalConditionInformation.
MySqlParserVisitor.prototype.visitSignalConditionInformation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#diagnosticsStatement.
MySqlParserVisitor.prototype.visitDiagnosticsStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#diagnosticsConditionInformationName.
MySqlParserVisitor.prototype.visitDiagnosticsConditionInformationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#describeStatements.
MySqlParserVisitor.prototype.visitDescribeStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#describeConnection.
MySqlParserVisitor.prototype.visitDescribeConnection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#fullId.
MySqlParserVisitor.prototype.visitFullId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tableName.
MySqlParserVisitor.prototype.visitTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#fullColumnName.
MySqlParserVisitor.prototype.visitFullColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#indexColumnName.
MySqlParserVisitor.prototype.visitIndexColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#userName.
MySqlParserVisitor.prototype.visitUserName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#mysqlVariable.
MySqlParserVisitor.prototype.visitMysqlVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#charsetName.
MySqlParserVisitor.prototype.visitCharsetName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#collationName.
MySqlParserVisitor.prototype.visitCollationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#engineName.
MySqlParserVisitor.prototype.visitEngineName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#uuidSet.
MySqlParserVisitor.prototype.visitUuidSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#xid.
MySqlParserVisitor.prototype.visitXid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#xuidStringId.
MySqlParserVisitor.prototype.visitXuidStringId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#authPlugin.
MySqlParserVisitor.prototype.visitAuthPlugin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#uid.
MySqlParserVisitor.prototype.visitUid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleId.
MySqlParserVisitor.prototype.visitSimpleId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dottedId.
MySqlParserVisitor.prototype.visitDottedId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#decimalLiteral.
MySqlParserVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#fileSizeLiteral.
MySqlParserVisitor.prototype.visitFileSizeLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#stringLiteral.
MySqlParserVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#booleanLiteral.
MySqlParserVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#hexadecimalLiteral.
MySqlParserVisitor.prototype.visitHexadecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#nullNotnull.
MySqlParserVisitor.prototype.visitNullNotnull = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#constant.
MySqlParserVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#stringDataType.
MySqlParserVisitor.prototype.visitStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#nationalStringDataType.
MySqlParserVisitor.prototype.visitNationalStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#nationalVaryingStringDataType.
MySqlParserVisitor.prototype.visitNationalVaryingStringDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dimensionDataType.
MySqlParserVisitor.prototype.visitDimensionDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleDataType.
MySqlParserVisitor.prototype.visitSimpleDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#collectionDataType.
MySqlParserVisitor.prototype.visitCollectionDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#spatialDataType.
MySqlParserVisitor.prototype.visitSpatialDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#longVarcharDataType.
MySqlParserVisitor.prototype.visitLongVarcharDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#longVarbinaryDataType.
MySqlParserVisitor.prototype.visitLongVarbinaryDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#collectionOptions.
MySqlParserVisitor.prototype.visitCollectionOptions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#convertedDataType.
MySqlParserVisitor.prototype.visitConvertedDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#lengthOneDimension.
MySqlParserVisitor.prototype.visitLengthOneDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#lengthTwoDimension.
MySqlParserVisitor.prototype.visitLengthTwoDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#lengthTwoOptionalDimension.
MySqlParserVisitor.prototype.visitLengthTwoOptionalDimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#uidList.
MySqlParserVisitor.prototype.visitUidList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#tables.
MySqlParserVisitor.prototype.visitTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#indexColumnNames.
MySqlParserVisitor.prototype.visitIndexColumnNames = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#expressions.
MySqlParserVisitor.prototype.visitExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#expressionsWithDefaults.
MySqlParserVisitor.prototype.visitExpressionsWithDefaults = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#constants.
MySqlParserVisitor.prototype.visitConstants = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleStrings.
MySqlParserVisitor.prototype.visitSimpleStrings = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#userVariables.
MySqlParserVisitor.prototype.visitUserVariables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#defaultValue.
MySqlParserVisitor.prototype.visitDefaultValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#currentTimestamp.
MySqlParserVisitor.prototype.visitCurrentTimestamp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#expressionOrDefault.
MySqlParserVisitor.prototype.visitExpressionOrDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#ifExists.
MySqlParserVisitor.prototype.visitIfExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#ifNotExists.
MySqlParserVisitor.prototype.visitIfNotExists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#specificFunctionCall.
MySqlParserVisitor.prototype.visitSpecificFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#aggregateFunctionCall.
MySqlParserVisitor.prototype.visitAggregateFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#scalarFunctionCall.
MySqlParserVisitor.prototype.visitScalarFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#udfFunctionCall.
MySqlParserVisitor.prototype.visitUdfFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#passwordFunctionCall.
MySqlParserVisitor.prototype.visitPasswordFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#simpleFunctionCall.
MySqlParserVisitor.prototype.visitSimpleFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dataTypeFunctionCall.
MySqlParserVisitor.prototype.visitDataTypeFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#valuesFunctionCall.
MySqlParserVisitor.prototype.visitValuesFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#caseFunctionCall.
MySqlParserVisitor.prototype.visitCaseFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#charFunctionCall.
MySqlParserVisitor.prototype.visitCharFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#positionFunctionCall.
MySqlParserVisitor.prototype.visitPositionFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#substrFunctionCall.
MySqlParserVisitor.prototype.visitSubstrFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#trimFunctionCall.
MySqlParserVisitor.prototype.visitTrimFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#weightFunctionCall.
MySqlParserVisitor.prototype.visitWeightFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#extractFunctionCall.
MySqlParserVisitor.prototype.visitExtractFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#getFormatFunctionCall.
MySqlParserVisitor.prototype.visitGetFormatFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#caseFuncAlternative.
MySqlParserVisitor.prototype.visitCaseFuncAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#levelWeightList.
MySqlParserVisitor.prototype.visitLevelWeightList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#levelWeightRange.
MySqlParserVisitor.prototype.visitLevelWeightRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#levelInWeightListElement.
MySqlParserVisitor.prototype.visitLevelInWeightListElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#aggregateWindowedFunction.
MySqlParserVisitor.prototype.visitAggregateWindowedFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#scalarFunctionName.
MySqlParserVisitor.prototype.visitScalarFunctionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#passwordFunctionClause.
MySqlParserVisitor.prototype.visitPasswordFunctionClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#functionArgs.
MySqlParserVisitor.prototype.visitFunctionArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#functionArg.
MySqlParserVisitor.prototype.visitFunctionArg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#isExpression.
MySqlParserVisitor.prototype.visitIsExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#notExpression.
MySqlParserVisitor.prototype.visitNotExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#logicalExpression.
MySqlParserVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#predicateExpression.
MySqlParserVisitor.prototype.visitPredicateExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#soundsLikePredicate.
MySqlParserVisitor.prototype.visitSoundsLikePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#expressionAtomPredicate.
MySqlParserVisitor.prototype.visitExpressionAtomPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#inPredicate.
MySqlParserVisitor.prototype.visitInPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#subqueryComparasionPredicate.
MySqlParserVisitor.prototype.visitSubqueryComparasionPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#betweenPredicate.
MySqlParserVisitor.prototype.visitBetweenPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#binaryComparasionPredicate.
MySqlParserVisitor.prototype.visitBinaryComparasionPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#isNullPredicate.
MySqlParserVisitor.prototype.visitIsNullPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#likePredicate.
MySqlParserVisitor.prototype.visitLikePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#regexpPredicate.
MySqlParserVisitor.prototype.visitRegexpPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#unaryExpressionAtom.
MySqlParserVisitor.prototype.visitUnaryExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#collateExpressionAtom.
MySqlParserVisitor.prototype.visitCollateExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#subqueryExpessionAtom.
MySqlParserVisitor.prototype.visitSubqueryExpessionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#mysqlVariableExpressionAtom.
MySqlParserVisitor.prototype.visitMysqlVariableExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#nestedExpressionAtom.
MySqlParserVisitor.prototype.visitNestedExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#nestedRowExpressionAtom.
MySqlParserVisitor.prototype.visitNestedRowExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#mathExpressionAtom.
MySqlParserVisitor.prototype.visitMathExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#intervalExpressionAtom.
MySqlParserVisitor.prototype.visitIntervalExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#existsExpessionAtom.
MySqlParserVisitor.prototype.visitExistsExpessionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#constantExpressionAtom.
MySqlParserVisitor.prototype.visitConstantExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#functionCallExpressionAtom.
MySqlParserVisitor.prototype.visitFunctionCallExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#binaryExpressionAtom.
MySqlParserVisitor.prototype.visitBinaryExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#fullColumnNameExpressionAtom.
MySqlParserVisitor.prototype.visitFullColumnNameExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#bitExpressionAtom.
MySqlParserVisitor.prototype.visitBitExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#unaryOperator.
MySqlParserVisitor.prototype.visitUnaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#comparisonOperator.
MySqlParserVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#logicalOperator.
MySqlParserVisitor.prototype.visitLogicalOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#bitOperator.
MySqlParserVisitor.prototype.visitBitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#mathOperator.
MySqlParserVisitor.prototype.visitMathOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#charsetNameBase.
MySqlParserVisitor.prototype.visitCharsetNameBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#transactionLevelBase.
MySqlParserVisitor.prototype.visitTransactionLevelBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#privilegesBase.
MySqlParserVisitor.prototype.visitPrivilegesBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#intervalTypeBase.
MySqlParserVisitor.prototype.visitIntervalTypeBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#dataTypeBase.
MySqlParserVisitor.prototype.visitDataTypeBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#keywordsCanBeId.
MySqlParserVisitor.prototype.visitKeywordsCanBeId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MySqlParser#functionNameBase.
MySqlParserVisitor.prototype.visitFunctionNameBase = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MySqlParserVisitor = MySqlParserVisitor;
