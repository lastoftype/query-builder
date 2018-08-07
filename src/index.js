import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import { FlexTable, Row, Cell, Input, Tooltip } from '@timberio/ui';

export default class QueryBuilder extends React.PureComponent {
    static propTypes = {
        schema: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                message: PropTypes.string,
                path: PropTypes.string.isRequired,
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
    };

    render() {
        return (
            <Container>
                <Input icon="circle" placeholder="Search" />
                {this.renderDropdown()}
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
                {panel.message && <div>{panel.message}</div>}

                <FlexTable>
                    {panel.subfields.length &&
                        panel.subfields.map(this.renderPanelField)}
                </FlexTable>
            </div>
        );
    }

    renderPanelField = field => {
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
                <Cell>placeholder for field type combobox</Cell>
                <Cell grow={2}>placeholder for field input</Cell>
                <Cell collapse>+</Cell>
            </Field>
        );
    };

    setActivePanel = e =>
        this.setState({
            activePanelIndex: parseInt(
                e.target.getAttribute('data-panel-index'),
                10,
            ),
        });
}

const Container = styled.div`
    position: relative;
    width: 100%;
`;

const Dropdown = styled.div`
    max-height: 80vh;
    overflow: auto;
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
    line-height: 0;
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
