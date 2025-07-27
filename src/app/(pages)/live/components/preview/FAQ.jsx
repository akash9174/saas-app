import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFaqs } from '../../../../redux/features/formSlice';

const FAQ = () => {
    const faqs = useSelector(selectFaqs);
    const [expandedItems, setExpandedItems] = useState(new Set());

    const toggleExpanded = (index) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedItems(newExpanded);
    };

    const faqStyles = {
        container: {
            width: '100%',
            backgroundColor: '#ffffff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
        header: {
            fontSize: '12px',
            fontWeight: '600',
            color: 'gray',
            marginBottom: '12px',
            letterSpacing: '-0.02em',
        },
        faqList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '11px',
        },
        faqItem: {
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #e9ecef',
            transition: 'all 0.3s ease',
        },
        faqItemHover: {
            borderColor: '#dee2e6',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
        questionButton: {
            width: '100%',
            padding: '10px 14px',
            backgroundColor: 'transparent',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '500',
            color: 'black',
            transition: 'all 0.2s ease',
            outline: 'none',
        },
        questionText: {
            flex: 1,
            marginRight: '16px',
            lineHeight: '1.5',
        },
        chevron: {
            width: '14px',
            height: '24px',
            transition: 'transform 0.3s ease',
            color: '#6c757d',
            flexShrink: 0,
        },
        chevronExpanded: {
            transform: 'rotate(180deg)',
            color: '#495057',
        },
        answerContainer: {
            overflow: 'hidden',
            transition: 'all 0.3s ease',
        },
        answer: {
            padding: '5px',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#495057',
            borderTop: '1px solid #e9ecef',
            margin: '0 16px 4px 16px',
            //   borderRadius: '8px',
        },
        emptyState: {
            textAlign: 'center',
            padding: '48px 24px',
            color: '#6c757d',
            fontSize: '16px',
        }
    };

    if (!faqs || faqs.length === 0) {
        return (
            //   <div style={faqStyles.container}>
            //     <h2 style={faqStyles.header}>FREQUENTLY ASKED QUESTIONS</h2>
            //     <div style={faqStyles.emptyState}>
            //       No frequently asked questions available at the moment.
            //     </div>
            //   </div>
            <></>
        );
    }

    return (
        <div style={faqStyles.container}>
            <h2 style={faqStyles.header}>FREQUENTLY ASKED QUESTIONS</h2>

            <div style={faqStyles.faqList}>
                {faqs.map((faq, index) => {
                    const isExpanded = expandedItems.has(index);

                    return (
                        <div
                            key={index}
                            style={{
                                ...faqStyles.faqItem,
                                ...(isExpanded ? faqStyles.faqItemHover : {}),
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f1f3f4';
                                e.currentTarget.style.borderColor = '#dee2e6';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = isExpanded ? 'white' : 'white';
                                e.currentTarget.style.borderColor = '#e9ecef';
                            }}
                        >
                            <button
                                style={faqStyles.questionButton}
                                onClick={() => toggleExpanded(index)}
                                aria-expanded={isExpanded}
                            >
                                <span style={faqStyles.questionText}>{faq.question}</span>
                                <svg
                                    style={{
                                        ...faqStyles.chevron,
                                        ...(isExpanded ? faqStyles.chevronExpanded : {}),
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div
                                style={{
                                    ...faqStyles.answerContainer,
                                    maxHeight: isExpanded ? '1000px' : '0',
                                    opacity: isExpanded ? 1 : 0,
                                }}
                            >
                                <div style={faqStyles.answer}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;