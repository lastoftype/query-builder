import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import { FlexTable, Row, Cell, Input, Tooltip, Select } from '@timberio/ui';

export default class QueryBuilder extends React.PureComponent {
    static propTypes = {
        schema: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                message: PropTypes.string,
                subfields: PropTypes.arrayOf(
                    PropTypes.shape({
                        description: PropTypes.string,
                        label: PropTypes.string.isRequired,
                        path: PropTypes.string.isRequired,
                        placeholder: PropTypes.string,
                    }),
                ),
            }),
        ),
    };

    state = {
        activePanelIndex: 0,
        open: true,

        /**
         * {
         *   path: {
         *     modifier?
         *     value?
         *   }
         * }
         */
        fieldState: {},
    };

    render() {
        return (
            <Container>
                <StyledInput icon="circle" placeholder="Search" />
                {JSON.stringify(this.state.fieldState)}
                {this.state.open && this.renderDropdown()}
            </Container>
        );
    }

    renderDropdown() {
        return (
            <Dropdown>
                <PanelToggles>
                    {this.props.schema.map((panel, index) => (
                        <PanelToggle
                            data-panel-active={
                                index === this.state.activePanelIndex
                            }
                            data-panel-index={index}
                            key={panel.path}
                            onClick={this.setActivePanel}
                        >
                            {panel.label}
                        </PanelToggle>
                    ))}
                </PanelToggles>

                {this.renderDropdownPanel(
                    this.props.schema[this.state.activePanelIndex],
                )}
            </Dropdown>
        );
    }

    renderDropdownPanel(panel) {
        return (
            <div>
                {panel.message && (
                    <StyledMarkdown>{panel.message}</StyledMarkdown>
                )}

                <FlexTable>
                    {panel.subfields.length
                        ? panel.subfields.map(this.renderField)
                        : null}
                </FlexTable>
            </div>
        );
    }

    renderField = field => {
        const fieldState = this.state.fieldState[field.path];

        return (
            <Field key={field.path}>
                <FieldLabel>
                    {field.label}{' '}
                    <FieldTooltip
                        message={field.description}
                        placement="bottom"
                    >
                        <FieldDescriptionIcon />
                    </FieldTooltip>
                </FieldLabel>
                <CellWithOverflow>
                    {this.renderFieldConfigurator(field)}
                </CellWithOverflow>
                <Cell grow={4}>
                    <StyledInput
                        inputProps={{
                            'data-field-path': field.path,
                        }}
                        onChange={this.updateFieldValue}
                        placeholder={field.placeholder}
                        value={fieldState ? fieldState.value || '' : ''}
                    />
                </Cell>
                <Cell collapse>+</Cell>
            </Field>
        );
    };

    renderFieldConfigurator(field) {
        switch (field.type) {
            case 'string':
                return (
                    <StyledSelect
                        data={[
                            {
                                value: '',
                                label: 'contains',
                                path: field.path,
                            },
                            {
                                value: '!',
                                label: 'does not contain',
                                path: field.path,
                            },
                        ]}
                        defaultValue={{
                            value: '',
                            label: 'contains',
                        }}
                        onChange={this.updateFieldModifier}
                    />
                );

            default:
                return null;
        }
    }

    setActivePanel = e =>
        this.setState({
            activePanelIndex: parseInt(
                e.target.getAttribute('data-panel-index'),
                10,
            ),
        });

    updateFieldModifier = option => {
        const { path } = option;

        this.setState({
            fieldState: {
                ...this.state.fieldState,
                [path]: Object.assign({}, this.state.fieldState[path], {
                    modifier: option.value,
                }),
            },
        });
    };

    updateFieldValue = e => {
        const path = e.target.getAttribute('data-field-path');

        this.setState({
            fieldState: {
                ...this.state.fieldState,
                [path]: Object.assign({}, this.state.fieldState[path], {
                    value: e.target.value,
                }),
            },
        });
    };
}

const Container = styled.div`
    position: relative;
    width: 100%;
`;

const Dropdown = styled.div`
    max-height: 80vh;
    padding: 1em;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
`;

const dividerHeight = 3;

const PanelToggles = styled.div`
    border-bottom: ${dividerHeight}px solid #ddd;
    display: flex;
    margin-bottom: 1em;
`;

const PanelToggle = styled.button`
    background: none;
    border: 0;
    color: #aaa;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 1em;
    outline: none;
    position: relative;
    padding: 0 0 10px;

    &:hover {
        color: purple;
    }

    &:first-child {
        margin-left: 0;
    }

    &[data-panel-active='true'] {
        color: purple;

        &::after {
            content: '';
            background: purple;
            height: ${dividerHeight}px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 100%;
        }
    }
`;

const Field = styled(Row)`
    border: 0;
`;

const FieldLabel = styled(Cell)`
    align-items: center;
    font-weight: 700;
`;

const FieldTooltip = styled(Tooltip)`
    > * {
        line-height: 0;
    }
`;

const FieldDescriptionIcon = styled.div`
    align-items: center;
    justify-content: center;
    display: inline-flex;
    position: relative;
    font-size: 0.9rem;
    margin-left: 0.5em;
    height: 1em;
    width: 1em;

    &::before {
        content: '';
        background: #ccc;
        border-radius: 50%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

    &::after {
        content: '?';
        color: white;
        font-size: 0.5em;
        font-weight: 700;
    }
`;

const CellWithOverflow = styled(Cell)`
    overflow: visible;
    padding-right: 1em;
`;

const StyledSelect = styled(Select)`
    width: 100%;
`;

const StyledInput = styled(Input)`
    width: 100%;

    input {
        box-sizing: border-box;
    }
`;

const StyledMarkdown = styled(Markdown)`
    text-align: center;

    a {
        border: 1px solid #ddd;
        border-radius: 2px;
        color: inherit;
        display: inline-block;
        padding: 0.5em 1em;
        text-decoration: none;
    }
`;
